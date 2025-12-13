import { Request, Response, NextFunction } from 'express';

/**
 * Data Isolation Middleware
 * Prevents customers from querying admin/staff data
 * Customers can only see their own data
 */
export function customerDataIsolation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user?.role === 'customer') {
    // Filter out admin/staff from any queries
    if (req.query) {
      req.query.role = { $ne: ['admin', 'staff'] } as any;
    }

    // Ensure customers can only access their own data
    if (req.params.id && req.params.id !== req.user._id) {
      return res.status(403).json({
        error: 'Access denied: You can only access your own data',
      });
    }
  }

  next();
}

