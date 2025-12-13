import { Router, Request, Response } from 'express';
import { z } from 'zod';
import Invoice from '../models/Invoice';
import { Customer } from '../models/Customer';
import { authenticate } from '../middleware/auth';
import { PDFService } from '../services/PDFService';
import { EmailService } from '../services/EmailService';
import { AuditService } from '../services/AuditService';

const router = Router();

// Zod Validation Schemas
const InvoiceItemSchema = z.object({
    description: z.string().min(1),
    quantity: z.number().min(1),
    unitPrice: z.number().min(0),
    total: z.number(),
});

const CreateInvoiceSchema = z.object({
    customerId: z.string().min(1),
    items: z.array(InvoiceItemSchema).min(1),
    taxRate: z.number().min(0).max(100).optional(),
    dueDate: z.string().min(1),
    notes: z.string().optional(),
});

// GET /api/invoices - List all invoices (Admin only)
router.get('/', authenticate, async (req: Request, res: Response) => {
    try {
        const invoices = await Invoice.find()
            .sort({ createdAt: -1 })
            .populate('customerId', 'profile.firstName profile.lastName email');
        res.json({ invoices });
    } catch (error: any) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({ error: error.message });
    }
});

// GET /api/invoices/:id - Get single invoice
router.get('/:id', authenticate, async (req: Request, res: Response) => {
    try {
        const invoice = await Invoice.findById(req.params.id)
            .populate('customerId', 'profile.firstName profile.lastName email');
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.json({ invoice });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/invoices - Create new invoice
router.post('/', authenticate, async (req: Request, res: Response) => {
    try {
        const validated = CreateInvoiceSchema.parse(req.body);

        // Find customer
        const customer = await Customer.findById(validated.customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        // Calculate totals
        const subtotal = validated.items.reduce((sum, item) => sum + item.total, 0);
        const taxRate = validated.taxRate || 0;
        const taxAmount = subtotal * (taxRate / 100);
        const total = subtotal + taxAmount;

        const invoice = new Invoice({
            customerId: validated.customerId,
            customerName: `${customer.profile.firstName} ${customer.profile.lastName}`,
            customerEmail: customer.email,
            items: validated.items,
            subtotal,
            taxRate,
            taxAmount,
            total,
            dueDate: new Date(validated.dueDate),
            notes: validated.notes,
            createdBy: (req as any).user._id,
        });

        await invoice.save();

        // Audit log
        await AuditService.logInvoiceAction('INVOICE_CREATE', invoice._id.toString(), req);

        res.status(201).json({ invoice });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }
        console.error('Error creating invoice:', error);
        res.status(500).json({ error: error.message });
    }
});

// PATCH /api/invoices/:id - Update invoice status
router.patch('/:id', authenticate, async (req: Request, res: Response) => {
    try {
        const { status, paidDate } = req.body;

        const updateData: any = {};
        if (status) updateData.status = status;
        if (status === 'paid') updateData.paidDate = paidDate || new Date();

        const invoice = await Invoice.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }

        const action = status === 'paid' ? 'INVOICE_MARK_PAID' : 'INVOICE_UPDATE';
        await AuditService.logInvoiceAction(action, req.params.id, req);

        res.json({ invoice });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/invoices/:id - Delete invoice
router.delete('/:id', authenticate, async (req: Request, res: Response) => {
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        await AuditService.logInvoiceAction('INVOICE_DELETE', req.params.id, req);

        res.json({ message: 'Invoice deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/invoices/:id/pdf - Generate and download PDF
router.get('/:id/pdf', authenticate, async (req: Request, res: Response) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }

        const pdfBuffer = await PDFService.generateInvoicePDF(invoice);

        await AuditService.logInvoiceAction('INVOICE_DOWNLOAD', req.params.id, req);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=Invoice-${invoice.invoiceNumber}.pdf`);
        res.send(pdfBuffer);
    } catch (error: any) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: error.message });
    }
});

// POST /api/invoices/:id/send - Send invoice via email
router.post('/:id/send', authenticate, async (req: Request, res: Response) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }

        const pdfBuffer = await PDFService.generateInvoicePDF(invoice);
        await EmailService.sendInvoiceEmail(invoice, pdfBuffer);

        // Update status to 'sent' if it was 'draft'
        if (invoice.status === 'draft') {
            invoice.status = 'sent';
            await invoice.save();
        }

        await AuditService.logInvoiceAction('INVOICE_EMAIL', req.params.id, req);

        res.json({ message: 'Invoice sent successfully', invoice });
    } catch (error: any) {
        console.error('Error sending invoice:', error);
        res.status(500).json({ error: error.message });
    }
});

// GET /api/invoices/customer/:customerId - Get invoices for a customer
router.get('/customer/:customerId', authenticate, async (req: Request, res: Response) => {
    try {
        const invoices = await Invoice.find({ customerId: req.params.customerId })
            .sort({ createdAt: -1 });
        res.json({ invoices });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
