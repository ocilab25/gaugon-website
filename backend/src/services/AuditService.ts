import { Request } from 'express';
import AuditLog, { AuditAction } from '../models/AuditLog';
import mongoose from 'mongoose';

interface AuditParams {
    action: AuditAction;
    userId: string;
    userEmail: string;
    userRole: string;
    targetId?: string;
    targetType?: string;
    details?: Record<string, any>;
    req?: Request;
}

export class AuditService {
    /**
     * Log an auditable action
     */
    static async log(params: AuditParams): Promise<void> {
        try {
            const auditEntry = new AuditLog({
                action: params.action,
                userId: new mongoose.Types.ObjectId(params.userId),
                userEmail: params.userEmail,
                userRole: params.userRole,
                targetId: params.targetId
                    ? new mongoose.Types.ObjectId(params.targetId)
                    : undefined,
                targetType: params.targetType,
                details: params.details,
                ipAddress: params.req
                    ? params.req.ip || params.req.headers['x-forwarded-for']
                    : undefined,
                userAgent: params.req?.headers['user-agent'],
            });

            await auditEntry.save();
            console.log(`[Audit] ${params.action} by ${params.userEmail}`);
        } catch (error) {
            // Don't fail the main operation if audit logging fails
            console.error('[Audit] Failed to log action:', error);
        }
    }

    /**
     * Helper for invoice actions
     */
    static async logInvoiceAction(
        action: AuditAction,
        invoiceId: string,
        req: Request
    ): Promise<void> {
        const user = (req as any).user;
        if (!user) return;

        await this.log({
            action,
            userId: user._id || user.userId,
            userEmail: user.email,
            userRole: user.role || 'admin',
            targetId: invoiceId,
            targetType: 'Invoice',
            req,
        });
    }

    /**
     * Get recent audit logs (for admin dashboard)
     */
    static async getRecentLogs(limit = 50): Promise<any[]> {
        return AuditLog.find()
            .sort({ createdAt: -1 })
            .limit(limit)
            .populate('userId', 'email')
            .lean();
    }

    /**
     * Get logs for a specific target
     */
    static async getLogsForTarget(
        targetId: string,
        targetType: string
    ): Promise<any[]> {
        return AuditLog.find({
            targetId: new mongoose.Types.ObjectId(targetId),
            targetType,
        })
            .sort({ createdAt: -1 })
            .lean();
    }
}
