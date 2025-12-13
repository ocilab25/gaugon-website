import mongoose, { Document, Schema } from 'mongoose';

export interface IInvoiceItem {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

export interface IInvoice extends Document {
    invoiceNumber: string;
    customerId: mongoose.Types.ObjectId;
    customerName: string;
    customerEmail: string;
    items: IInvoiceItem[];
    subtotal: number;
    taxRate: number;
    taxAmount: number;
    total: number;
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    dueDate: Date;
    paidDate?: Date;
    notes?: string;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const InvoiceItemSchema = new Schema<IInvoiceItem>({
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true },
});

const InvoiceSchema = new Schema<IInvoice>(
    {
        invoiceNumber: { type: String, required: true, unique: true },
        customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
        customerName: { type: String, required: true },
        customerEmail: { type: String, required: true },
        items: { type: [InvoiceItemSchema], required: true, validate: [(v: any[]) => v.length > 0, 'At least one item is required'] },
        subtotal: { type: Number, required: true },
        taxRate: { type: Number, default: 0 },
        taxAmount: { type: Number, default: 0 },
        total: { type: Number, required: true },
        status: {
            type: String,
            enum: ['draft', 'sent', 'paid', 'overdue', 'cancelled'],
            default: 'draft',
        },
        dueDate: { type: Date, required: true },
        paidDate: { type: Date },
        notes: { type: String },
        createdBy: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
    },
    { timestamps: true }
);

// Auto-generate invoice number before save
InvoiceSchema.pre('save', async function (next) {
    if (this.isNew && !this.invoiceNumber) {
        const count = await mongoose.model('Invoice').countDocuments();
        const year = new Date().getFullYear();
        this.invoiceNumber = `GAU-${year}-${String(count + 1).padStart(4, '0')}`;
    }
    next();
});

export default mongoose.model<IInvoice>('Invoice', InvoiceSchema);
