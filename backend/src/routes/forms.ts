import { Router, Request, Response } from 'express';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';

const router = Router();

// Strict rate limiter for forms (5 submissions per hour per IP)
const formLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message: { error: 'Too many submissions, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Zod Schemas
const ContactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    phone: z.string().optional(),
    inquiry_type: z.string().min(1),
    country: z.string().min(1),
    message: z.string().min(20).max(5000),
    subject: z.string().min(1),
    'h-captcha-response': z.string().min(1, 'hCaptcha is required'),
});

const NewsletterSchema = z.object({
    email: z.string().email(),
    access_key: z.string().optional(), // We'll override this backend-side
});

// Helper to send to Web3Forms
async function sendToWeb3Forms(data: any) {
    const access_key = process.env.WEB3FORMS_ACCESS_KEY;

    if (!access_key) {
        throw new Error('Server misconfiguration: Missing Web3Forms key');
    }

    // Override/Ensure access_key is from server env
    const payload = { ...data, access_key };

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const result = await response.json() as any;
    if (!result.success) {
        throw new Error(result.message || 'Web3Forms API Error');
    }
    return result;
}

// POST /api/forms/contact
router.post('/contact', formLimiter, async (req: Request, res: Response) => {
    try {
        // 1. Validate Input
        const validatedData = ContactSchema.parse(req.body);

        // 2. Send to Web3Forms
        await sendToWeb3Forms(validatedData);

        // 3. Success
        return res.status(200).json({ success: true, message: 'Inquiry received' });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }
        console.error('Contact Form Error:', error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

// POST /api/forms/newsletter
router.post('/newsletter', formLimiter, async (req: Request, res: Response) => {
    try {
        // 1. Validate Input
        const validatedData = NewsletterSchema.parse(req.body);

        // 2. Prepare Payload for Newsletter
        const payload = {
            email: validatedData.email,
            from_name: 'Gaugon Website',
            subject: 'New Newsletter Subscriber',
        };

        // 3. Send to Web3Forms
        await sendToWeb3Forms(payload);

        return res.status(200).json({ success: true, message: 'Subscribed successfully' });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }
        console.error('Newsletter Error:', error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

export default router;
