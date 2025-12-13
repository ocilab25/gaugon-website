import mongoose, { Document, Schema } from 'mongoose';

export type ServiceType =
    | 'consultation'
    | 'custom_development'
    | 'integration'
    | 'support'
    | 'maintenance'
    | 'other';

export type ServiceRequestStatus =
    | 'pending_review'
    | 'quoted'
    | 'approved'
    | 'in_progress'
    | 'completed'
    | 'cancelled';

export interface IStatusHistory {
    status: ServiceRequestStatus;
    timestamp: Date;
    updatedBy: mongoose.Types.ObjectId;
    note?: string;
}

export interface IServiceRequest extends Document {
    requestNumber: string;
    customerId: mongoose.Types.ObjectId;
    customerName: string;
    customerEmail: string;
    serviceType: ServiceType;
    description: string;
    attachments?: string[];
    estimatedValue?: number;
    quotedPrice?: number;
    status: ServiceRequestStatus;
    statusHistory: IStatusHistory[];
    progressPercent: number;
    dueDate?: Date;
    completedDate?: Date;
    assignedTo?: mongoose.Types.ObjectId;
    notes?: string;
    cancellationReason?: string;
    createdAt: Date;
    updatedAt: Date;
}

const StatusHistorySchema = new Schema<IStatusHistory>({
    status: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    note: { type: String },
});

const ServiceRequestSchema = new Schema<IServiceRequest>(
    {
        requestNumber: { type: String, required: true, unique: true },
        customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
        customerName: { type: String, required: true },
        customerEmail: { type: String, required: true },
        serviceType: {
            type: String,
            enum: ['consultation', 'custom_development', 'integration', 'support', 'maintenance', 'other'],
            required: true,
        },
        description: { type: String, required: true },
        attachments: [{ type: String }],
        estimatedValue: { type: Number },
        quotedPrice: { type: Number },
        status: {
            type: String,
            enum: ['pending_review', 'quoted', 'approved', 'in_progress', 'completed', 'cancelled'],
            default: 'pending_review',
        },
        statusHistory: [StatusHistorySchema],
        progressPercent: { type: Number, default: 0 },
        dueDate: { type: Date },
        completedDate: { type: Date },
        assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
        notes: { type: String },
        cancellationReason: { type: String },
    },
    { timestamps: true }
);

// Auto-generate request number before save
ServiceRequestSchema.pre('save', async function (next) {
    if (this.isNew && !this.requestNumber) {
        const count = await mongoose.model('ServiceRequest').countDocuments();
        const year = new Date().getFullYear();
        this.requestNumber = `GAU-SR-${year}-${String(count + 1).padStart(4, '0')}`;
    }
    next();
});

// Indexes
ServiceRequestSchema.index({ customerId: 1 });
ServiceRequestSchema.index({ status: 1 });
ServiceRequestSchema.index({ createdAt: -1 });

export default mongoose.model<IServiceRequest>('ServiceRequest', ServiceRequestSchema);
