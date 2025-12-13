import mongoose, { Document, Schema } from 'mongoose';

export type AuditAction =
    | 'INVOICE_CREATE'
    | 'INVOICE_UPDATE'
    | 'INVOICE_DELETE'
    | 'INVOICE_DOWNLOAD'
    | 'INVOICE_EMAIL'
    | 'INVOICE_MARK_PAID'
    | 'USER_LOGIN'
    | 'USER_LOGOUT'
    | 'USER_REGISTER'
    | 'CUSTOMER_CREATE'
    | 'CUSTOMER_UPDATE'
    | 'SUBSCRIPTION_CHANGE';

export interface IAuditLog extends Document {
    action: AuditAction;
    userId: mongoose.Types.ObjectId;
    userEmail: string;
    userRole: string;
    targetId?: mongoose.Types.ObjectId;
    targetType?: string;
    details?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
    createdAt: Date;
}

const AuditLogSchema = new Schema<IAuditLog>(
    {
        action: {
            type: String,
            required: true,
            enum: [
                'INVOICE_CREATE',
                'INVOICE_UPDATE',
                'INVOICE_DELETE',
                'INVOICE_DOWNLOAD',
                'INVOICE_EMAIL',
                'INVOICE_MARK_PAID',
                'USER_LOGIN',
                'USER_LOGOUT',
                'USER_REGISTER',
                'CUSTOMER_CREATE',
                'CUSTOMER_UPDATE',
                'SUBSCRIPTION_CHANGE',
            ],
        },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        userEmail: { type: String, required: true },
        userRole: { type: String, required: true },
        targetId: { type: Schema.Types.ObjectId },
        targetType: { type: String },
        details: { type: Schema.Types.Mixed },
        ipAddress: { type: String },
        userAgent: { type: String },
    },
    { timestamps: true }
);

// Indexes for efficient querying
AuditLogSchema.index({ action: 1 });
AuditLogSchema.index({ userId: 1 });
AuditLogSchema.index({ targetId: 1 });
AuditLogSchema.index({ createdAt: -1 });

export default mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
