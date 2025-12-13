import express, { Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import { requireRole } from '../middleware/roles';
import { Customer } from '../models/Customer';
import { z } from 'zod';

const router = express.Router();

// All customer routes require authentication and customer role
router.use(authenticate);
router.use(requireRole('customer'));

// Get own profile
router.get('/profile', async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.user!.userId).select(
      '-passwordHash -refreshToken'
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ customer });
  } catch (error) {
    console.error('[Customer] Get profile error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update own profile
const updateProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  phone: z.string().optional(),
});

router.put('/profile', async (req: Request, res: Response) => {
  try {
    const body = updateProfileSchema.parse(req.body);
    const customer = await Customer.findById(req.user!.userId);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    if (body.firstName) customer.profile.firstName = body.firstName;
    if (body.lastName) customer.profile.lastName = body.lastName;
    if (body.company !== undefined) customer.profile.company = body.company;
    if (body.phone) customer.profile.phone = body.phone;

    await customer.save();

    res.json({
      customer: {
        id: customer._id,
        email: customer.email,
        profile: customer.profile,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('[Customer] Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Get own subscription
router.get('/subscription', async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.user!.userId).select(
      '-passwordHash -refreshToken'
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ subscription: customer.subscription });
  } catch (error) {
    console.error('[Customer] Get subscription error:', error);
    res.status(500).json({ error: 'Failed to fetch subscription' });
  }
});

export default router;

