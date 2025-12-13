import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { authenticate } from '../middleware/auth';
import { requireRole } from '../middleware/roles';
import { Admin } from '../models/Admin';
import { Customer } from '../models/Customer';
import { Staff } from '../models/Staff';
import { z } from 'zod';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(authenticate);
router.use(requireRole('admin'));

// Get all customers (admin can see customers)
router.get('/customers', async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find({ isActive: true })
      .select('-passwordHash -refreshToken')
      .sort({ createdAt: -1 });

    res.json({ customers });
  } catch (error) {
    console.error('[Admin] Get customers error:', error);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

// Get customer by ID
router.get('/customers/:id', async (req: Request, res: Response) => {
  try {
    const customer = await Customer.findById(req.params.id).select(
      '-passwordHash -refreshToken'
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ customer });
  } catch (error) {
    console.error('[Admin] Get customer error:', error);
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
});

// Get all staff (admin only)
router.get('/staff', async (req: Request, res: Response) => {
  try {
    const staff = await Staff.find({ isActive: true })
      .select('-passwordHash -refreshToken')
      .sort({ createdAt: -1 });

    res.json({ staff });
  } catch (error) {
    console.error('[Admin] Get staff error:', error);
    res.status(500).json({ error: 'Failed to fetch staff' });
  }
});

// Create staff member
const createStaffSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  permissions: z.array(z.string()).optional(),
  assignedCustomers: z.array(z.string()).optional(),
});

router.post('/staff', async (req: Request, res: Response) => {
  try {
    const body = createStaffSchema.parse(req.body);
    const { email, password, permissions, assignedCustomers } = body;

    // Check if user exists
    const existingUser = await Staff.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create staff
    const staff = await Staff.create({
      email,
      passwordHash,
      role: 'staff',
      permissions: permissions || ['view_customers', 'view_subscriptions'],
      assignedCustomers: assignedCustomers || [],
    });

    res.status(201).json({
      staff: {
        id: staff._id,
        email: staff.email,
        role: staff.role,
        permissions: staff.permissions,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('[Admin] Create staff error:', error);
    res.status(500).json({ error: 'Failed to create staff' });
  }
});

// Get all admins (admin only - for management)
router.get('/admins', async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find({ isActive: true })
      .select('-passwordHash -refreshToken')
      .sort({ createdAt: -1 });

    res.json({ admins });
  } catch (error) {
    console.error('[Admin] Get admins error:', error);
    res.status(500).json({ error: 'Failed to fetch admins' });
  }
});

export default router;

