# Coding Standards & Best Practices

## Clean Code Principles

### 1. Single Responsibility Principle (SRP)
- Each function should have **one clear purpose**
- Functions should be small and focused
- If a function does multiple things, split it into smaller functions

**Example:**
```typescript
// ❌ Bad: Function does too much
async function processInvoice(invoiceData) {
    // Validates data
    // Creates invoice
    // Sends email
    // Updates analytics
}

// ✅ Good: Single purpose functions
async function validateInvoiceData(data) { /* ... */ }
async function createInvoice(data) { /* ... */ }
async function sendInvoiceEmail(invoice) { /* ... */ }
async function trackInvoiceCreated(invoice) { /* ... */ }
```

### 2. Function Naming
- Use **descriptive verb-noun combinations**
- Functions should read like sentences
- Avoid generic names like `process()`, `handle()`, `do()`

**Examples:**
```typescript
// ✅ Good names
fetchUserOrders()
validateEmailFormat()
generateInvoicePDF()
sendTicketNotification()
calculateOrderTotal()
```

### 3. API Integration Planning

#### External APIs to Consider
1. **Payment Processing**:
   - Stripe API (credit cards)
   - PayPal API (alternative payment)
   - Functions: `processStripePayment()`, `handlePayPalWebhook()`

2. **Email Services**:
   - Already using nodemailer
   - Functions: `sendInvoice()`, `sendTicketNotification()`

3. **File Storage** (Future):
   - Cloudinary/S3 for uploads
   - Functions: `uploadTicketAttachment()`, `generateSecureFileUrl()`

4. **SMS Notifications** (Future):
   - Twilio for order updates
   - Functions: `sendOrderStatusSMS()`

#### API Integration Best Practices

**Separate Concerns:**
```typescript
// Service Layer (handles API calls)
class StripeService {
    async createPaymentIntent(amount: number) { /* ... */ }
    async capturePayment(intentId: string) { /* ... */ }
    async refundPayment(chargeId: string) { /* ... */ }
}

// Route Layer (orchestrates)
router.post('/invoices/:id/pay', async (req, res) => {
    const invoice = await getInvoice(req.params.id);
    const intent = await stripeService.createPaymentIntent(invoice.total);
    res.json({ client_secret: intent.client_secret });
});
```

**Error Handling:**
```typescript
// ✅ Wrap external API calls with try-catch
async function sendInvoiceEmail(invoice: IInvoice) {
    try {
        await emailService.send({ ... });
        await auditService.log('invoice_sent', invoice.id);
    } catch (error) {
        console.error('[EmailService] Failed to send:', error);
        // Don't throw - fail gracefully
        await auditService.log('invoice_send_failed', invoice.id);
    }
}
```

**Environment Configuration:**
```typescript
// ✅ Validate API keys at startup
if (!process.env.STRIPE_SECRET_KEY && process.env.NODE_ENV === 'production') {
    throw new Error('STRIPE_SECRET_KEY required in production');
}
```

### 4. Code Organization

**File Structure:**
```
backend/src/
├── models/          # Data schemas only
├── routes/          # API endpoints (thin orchestration)
├── services/        # Business logic & external APIs
│   ├── EmailService.ts
│   ├── PDFService.ts
│   ├── PaymentService.ts  (future)
│   └── StorageService.ts  (future)
├── middleware/      # Auth, validation, rate limiting
└── utils/           # Pure helper functions
```

**Route Files Should Be Thin:**
```typescript
// Routes = Validation + Orchestration
router.post('/invoices', auth, async (req, res) => {
    // 1. Validate
    const parsed = CreateInvoiceSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(...);
    
    // 2. Call service
    const invoice = await InvoiceService.create(parsed.data);
    
    // 3. Return
    res.status(201).json(invoice);
});
```

**Service Files Hold Business Logic:**
```typescript
// services/InvoiceService.ts
class InvoiceService {
    async create(data: CreateInvoiceDTO) {
        const invoice = new Invoice(data);
        await invoice.save();
        
        // External API integrations here
        await this.emailService.sendInvoice(invoice);
        await this.auditService.log('invoice_created', invoice.id);
        
        return invoice;
    }
    
    async processPayment(invoiceId: string, paymentData: any) {
        const invoice = await Invoice.findById(invoiceId);
        
        // 1. Process via Stripe
        const charge = await this.paymentService.charge(paymentData);
        
        // 2. Update invoice
        invoice.status = 'paid';
        invoice.paymentId = charge.id;
        await invoice.save();
        
        // 3. Notify customer
        await this.emailService.sendReceipt(invoice);
        
        return invoice;
    }
}
```

## Naming Conventions

### Files
- Models: `PascalCase.ts` (e.g., `Invoice.ts`, `Ticket.ts`)
- Services: `PascalCase.ts` (e.g., `EmailService.ts`)
- Routes: `camelCase.ts` (e.g., `invoiceRoutes.ts`)

### Functions
- **Queries**: `get`, `fetch`, `find` (e.g., `getInvoiceById()`)
- **Mutations**: `create`, `update`, `delete` (e.g., `updateTicketStatus()`)
- **Actions**: `send`, `process`, `generate` (e.g., `sendInvoiceEmail()`)
- **Validation**: `validate`, `check`, `is` (e.g., `validateEmailFormat()`)

### Variables
- **Booleans**: `is`, `has`, `should` (e.g., `isValid`, `hasPaid`)
- **Arrays**: Plural nouns (e.g., `tickets`, `invoices`)
- **Objects**: Singular nouns (e.g., `user`, `invoice`)

## Testing Mindset

When writing functions, ask:
1. **Can I test this in isolation?**
2. **Does it have side effects?**
3. **Is it doing too many things?**

---

*Last Updated: 2024-12-13*
