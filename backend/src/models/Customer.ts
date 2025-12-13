import mongoose, { Schema } from 'mongoose';
import { User, IUser } from './User';

export type SubscriptionPlan = 'standard' | 'plus' | 'max' | 'enterprise';
export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'trial';

export interface ICustomer extends IUser {
  role: 'customer';
  profile: {
    firstName: string;
    lastName: string;
    company?: string;
    phone?: string;
  };
  subscription: {
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    startDate: Date;
    endDate?: Date;
    billingCycle: 'monthly' | 'annual';
  };
}

const CustomerSchema = new Schema<ICustomer>(
  {
    profile: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      company: {
        type: String,
        trim: true,
      },
      phone: {
        type: String,
        trim: true,
      },
    },
    subscription: {
      plan: {
        type: String,
        enum: ['standard', 'plus', 'max', 'enterprise'],
        default: 'standard',
      },
      status: {
        type: String,
        enum: ['active', 'cancelled', 'expired', 'trial'],
        default: 'trial',
      },
      startDate: {
        type: Date,
        default: Date.now,
      },
      endDate: {
        type: Date,
      },
      billingCycle: {
        type: String,
        enum: ['monthly', 'annual'],
        default: 'monthly',
      },
    },
  },
  {
    discriminatorKey: 'role',
  }
);

// Indexes for customer queries
CustomerSchema.index({ 'profile.firstName': 1, 'profile.lastName': 1 });
CustomerSchema.index({ 'subscription.status': 1 });
CustomerSchema.index({ 'subscription.plan': 1 });

export const Customer = User.discriminator<ICustomer>('customer', CustomerSchema);

