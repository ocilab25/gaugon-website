import express, { Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import { requireRole } from '../middleware/roles';
import { Subscription } from '../models/Subscription';
import { Customer } from '../models/Customer';
import { z } from 'zod';

const router = express.Router();

// All subscription routes require authentication
router.use(authenticate);

// Get all subscriptions (admin/staff only)
router.get(
  '/',
  requireRole('admin', 'staff'),
  async (req: Request, res: Response) => {
    try {
      const subscriptions = await Subscription.find()
        .populate('customerId', 'email profile')
        .sort({ createdAt: -1 });

      res.json({ subscriptions });
    } catch (error) {
      console.error('[Subscriptions] Get all error:', error);
      res.status(500).json({ error: 'Failed to fetch subscriptions' });
    }
  }
);

// Get subscription by customer ID (admin/staff/customer - own data)
router.get('/:customerId', async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;

    // Customers can only access their own subscriptions
    if (req.user!.role === 'customer' && customerId !== req.user!.userId) {
      return res.status(403).json({
        error: 'Access denied: You can only access your own subscriptions',
      });
    }

    const subscriptions = await Subscription.find({ customerId })
      .populate('customerId', 'email profile')
      .sort({ createdAt: -1 });

    res.json({ subscriptions });
  } catch (error) {
    console.error('[Subscriptions] Get by customer error:', error);
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
});

// Create subscription (admin only)
const createSubscriptionSchema = z.object({
  customerId: z.string(),
  plan: z.enum(['standard', 'plus', 'max', 'enterprise']),
  status: z.enum(['active', 'cancelled', 'expired', 'trial']).optional(),
  billingCycle: z.enum(['monthly', 'annual']).optional(),
  price: z.number(),
  paymentMethod: z.string().optional(),
});

router.post(
  '/',
  requireRole('admin'),
  async (req: Request, res: Response) => {
    try {
      const body = createSubscriptionSchema.parse(req.body);
      const { customerId, plan, status = 'active', billingCycle = 'monthly', price, paymentMethod } = body;

      // Verify customer exists
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }

      // Create subscription
      const subscription = await Subscription.create({
        customerId,
        plan,
        status,
        billingCycle,
        price,
        paymentMethod,
        startDate: new Date(),
      });

      // Update customer subscription
      customer.subscription = {
        plan,
        status,
        startDate: new Date(),
        billingCycle,
      };
      await customer.save();

      res.status(201).json({ subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('[Subscriptions] Create error:', error);
      res.status(500).json({ error: 'Failed to create subscription' });
    }
  }
);

// Update subscription (admin only)
const updateSubscriptionSchema = z.object({
  plan: z.enum(['standard', 'plus', 'max', 'enterprise']).optional(),
  status: z.enum(['active', 'cancelled', 'expired', 'trial']).optional(),
  billingCycle: z.enum(['monthly', 'annual']).optional(),
  price: z.number().optional(),
  paymentMethod: z.string().optional(),
});

router.put(
  '/:id',
  requireRole('admin'),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = updateSubscriptionSchema.parse(req.body);

      const subscription = await Subscription.findById(id);
      if (!subscription) {
        return res.status(404).json({ error: 'Subscription not found' });
      }

      // Update fields
      if (body.plan) subscription.plan = body.plan;
      if (body.status) subscription.status = body.status;
      if (body.billingCycle) subscription.billingCycle = body.billingCycle;
      if (body.price !== undefined) subscription.price = body.price;
      if (body.paymentMethod !== undefined)
        subscription.paymentMethod = body.paymentMethod;

      await subscription.save();

      // Update customer subscription if status/plan changed
      if (body.plan || body.status) {
        const customer = await Customer.findById(subscription.customerId);
        if (customer) {
          if (body.plan) customer.subscription.plan = body.plan;
          if (body.status) customer.subscription.status = body.status;
          await customer.save();
        }
      }

      res.json({ subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error('[Subscriptions] Update error:', error);
      res.status(500).json({ error: 'Failed to update subscription' });
    }
  }
);

export default router;

