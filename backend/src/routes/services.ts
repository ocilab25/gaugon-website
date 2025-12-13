import { Router, Request, Response } from 'express';
import { z } from 'zod';
import ServiceRequest from '../models/ServiceRequest';
import { Customer } from '../models/Customer';
import { authenticate } from '../middleware/auth';
import mongoose from 'mongoose';

const router = Router();

// Validation Schemas
const CreateServiceRequestSchema = z.object({
    serviceType: z.enum(['consultation', 'custom_development', 'integration', 'support', 'maintenance', 'other']),
    description: z.string().min(10),
    estimatedValue: z.number().optional(),
    attachments: z.array(z.string()).optional(),
});

const QuoteSchema = z.object({
    quotedPrice: z.number().min(0),
    notes: z.string().optional(),
});

// ============= CUSTOMER ROUTES =============

// GET /api/services/my-requests - Get customer's own requests
router.get('/my-requests', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        if (user.role !== 'customer') {
            return res.status(403).json({ error: 'Customer access only' });
        }

        const requests = await ServiceRequest.find({ customerId: user._id })
            .sort({ createdAt: -1 });
        res.json({ requests });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/services/request - Create a new service request
router.post('/request', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        if (user.role !== 'customer') {
            return res.status(403).json({ error: 'Customer access only' });
        }

        const validated = CreateServiceRequestSchema.parse(req.body);

        // Get customer details
        const customer = await Customer.findById(user._id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        const serviceRequest = new ServiceRequest({
            customerId: user._id,
            customerName: `${customer.profile.firstName} ${customer.profile.lastName}`,
            customerEmail: customer.email,
            serviceType: validated.serviceType,
            description: validated.description,
            estimatedValue: validated.estimatedValue,
            attachments: validated.attachments || [],
            statusHistory: [{
                status: 'pending_review',
                timestamp: new Date(),
                updatedBy: new mongoose.Types.ObjectId(user._id),
                note: 'Request submitted',
            }],
        });

        await serviceRequest.save();
        res.status(201).json({ request: serviceRequest });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }
        res.status(500).json({ error: error.message });
    }
});

// GET /api/services/request/:id - Get single request (customer can only see their own)
router.get('/request/:id', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        const request = await ServiceRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        // Customer can only see their own
        if (user.role === 'customer' && request.customerId.toString() !== user._id) {
            return res.status(403).json({ error: 'Access denied' });
        }

        res.json({ request });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/services/request/:id/approve - Customer approves quote
router.post('/request/:id/approve', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        const request = await ServiceRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        // Only customer can approve their own quote
        if (user.role !== 'customer' || request.customerId.toString() !== user._id) {
            return res.status(403).json({ error: 'Access denied' });
        }

        if (request.status !== 'quoted') {
            return res.status(400).json({ error: 'Request must be in quoted status to approve' });
        }

        request.status = 'approved';
        request.progressPercent = 25;
        request.statusHistory.push({
            status: 'approved',
            timestamp: new Date(),
            updatedBy: new mongoose.Types.ObjectId(user._id),
            note: 'Quote approved by customer',
        });

        await request.save();
        res.json({ request });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/services/request/:id/cancel - Customer cancels request
router.post('/request/:id/cancel', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        const { reason } = req.body;
        const request = await ServiceRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        // Customer can only cancel pending_review or quoted requests
        if (user.role === 'customer') {
            if (request.customerId.toString() !== user._id) {
                return res.status(403).json({ error: 'Access denied' });
            }
            if (!['pending_review', 'quoted'].includes(request.status)) {
                return res.status(400).json({ error: 'Cannot cancel request in current status' });
            }
        }

        request.status = 'cancelled';
        request.cancellationReason = reason || 'Cancelled by customer';
        request.statusHistory.push({
            status: 'cancelled',
            timestamp: new Date(),
            updatedBy: new mongoose.Types.ObjectId(user._id),
            note: reason || 'Cancelled by customer',
        });

        await request.save();
        res.json({ request });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// ============= ADMIN ROUTES =============

// GET /api/services/admin/all - Get all service requests (Admin only)
router.get('/admin/all', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        if (user.role !== 'admin' && user.role !== 'staff') {
            return res.status(403).json({ error: 'Admin access only' });
        }

        const requests = await ServiceRequest.find()
            .sort({ createdAt: -1 })
            .populate('assignedTo', 'email');
        res.json({ requests });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/services/admin/:id/quote - Admin sets quote
router.post('/admin/:id/quote', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        if (user.role !== 'admin' && user.role !== 'staff') {
            return res.status(403).json({ error: 'Admin access only' });
        }

        const validated = QuoteSchema.parse(req.body);
        const request = await ServiceRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        request.quotedPrice = validated.quotedPrice;
        request.status = 'quoted';
        request.progressPercent = 10;
        if (validated.notes) request.notes = validated.notes;

        request.statusHistory.push({
            status: 'quoted',
            timestamp: new Date(),
            updatedBy: new mongoose.Types.ObjectId(user._id),
            note: `Quote set: $${validated.quotedPrice}`,
        });

        await request.save();
        res.json({ request });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }
        res.status(500).json({ error: error.message });
    }
});

// PATCH /api/services/admin/:id/status - Admin updates status
router.patch('/admin/:id/status', authenticate, async (req: Request, res: Response) => {
    try {
        const user = (req as any).user;
        if (user.role !== 'admin' && user.role !== 'staff') {
            return res.status(403).json({ error: 'Admin access only' });
        }

        const { status, progressPercent, note } = req.body;
        const request = await ServiceRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: 'Request not found' });
        }

        if (status) request.status = status;
        if (progressPercent !== undefined) request.progressPercent = progressPercent;
        if (status === 'completed') {
            request.completedDate = new Date();
            request.progressPercent = 100;
        }

        request.statusHistory.push({
            status: status || request.status,
            timestamp: new Date(),
            updatedBy: new mongoose.Types.ObjectId(user._id),
            note: note || `Status updated to ${status}`,
        });

        await request.save();
        res.json({ request });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
