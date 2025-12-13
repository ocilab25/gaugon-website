import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';
import { User, Admin, Customer } from '../models/User';
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['admin', 'staff', 'customer']).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

// Register (Customer only by default, admin/staff require ALLOW_ADMIN_REGISTER)
router.post('/register', authLimiter, async (req: Request, res: Response) => {
  try {
    const body = registerSchema.parse(req.body);
    const { email, password, role = 'customer', firstName, lastName } = body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Admin/Staff registration requires env flag
    if (role !== 'customer' && process.env.ALLOW_ADMIN_REGISTER !== 'true') {
      return res.status(403).json({
        error: 'Admin/Staff registration is disabled',
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user based on role
    let user;
    if (role === 'customer') {
      if (!firstName || !lastName) {
        return res.status(400).json({
          error: 'First name and last name are required for customer registration',
        });
      }
      user = await Customer.create({
        email,
        passwordHash,
        role: 'customer',
        profile: { firstName, lastName },
        subscription: {
          plan: 'standard',
          status: 'trial',
          startDate: new Date(),
          billingCycle: 'monthly',
        },
      });
    } else if (role === 'admin') {
      user = await Admin.create({
        email,
        passwordHash,
        role: 'admin',
      });
    } else {
      return res.status(400).json({ error: 'Invalid role for registration' });
    }

    // Generate tokens
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // Save refresh token (for admin/staff)
    if (role === 'admin' || role === 'staff') {
      user.refreshToken = refreshToken;
      user.refreshTokenExpiry = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ); // 7 days
      await user.save();
    }

    res.status(201).json({
      token,
      refreshToken,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('[Auth] Register error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', authLimiter, async (req: Request, res: Response) => {
  try {
    const body = loginSchema.parse(req.body);
    const { email, password } = body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if active
    if (!user.isActive) {
      return res.status(401).json({ error: 'Account is inactive' });
    }

    // Verify password
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update last login (for admin)
    if (user.role === 'admin') {
      (user as any).lastLogin = new Date();
      await user.save();
    }

    // Generate tokens
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // Save refresh token (for admin/staff)
    if (user.role === 'admin' || user.role === 'staff') {
      user.refreshToken = refreshToken;
      user.refreshTokenExpiry = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      );
      await user.save();
    }

    res.json({
      token,
      refreshToken,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('[Auth] Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Refresh token
router.post('/refresh', async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token required' });
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);

    // Find user and verify refresh token matches
    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // For admin/staff, verify stored refresh token
    if (user.role === 'admin' || user.role === 'staff') {
      if (
        user.refreshToken !== refreshToken ||
        !user.refreshTokenExpiry ||
        user.refreshTokenExpiry < new Date()
      ) {
        return res.status(401).json({ error: 'Refresh token expired' });
      }
    }

    // Generate new tokens
    const newToken = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const newRefreshToken = generateRefreshToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // Update refresh token (for admin/staff)
    if (user.role === 'admin' || user.role === 'staff') {
      user.refreshToken = newRefreshToken;
      user.refreshTokenExpiry = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      );
      await user.save();
    }

    res.json({
      token: newToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    console.error('[Auth] Refresh error:', error);
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// Logout (invalidate refresh token)
router.post('/logout', authenticate, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!.userId);
    if (user && (user.role === 'admin' || user.role === 'staff')) {
      user.refreshToken = undefined;
      user.refreshTokenExpiry = undefined;
      await user.save();
    }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('[Auth] Logout error:', error);
    res.status(500).json({ error: 'Logout failed' });
  }
});

// Get current user
router.get('/me', authenticate, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!.userId).select('-passwordHash');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('[Auth] Me error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

export default router;

