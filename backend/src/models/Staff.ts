import mongoose, { Schema } from 'mongoose';
import { User, IUser } from './User';

export interface IStaff extends IUser {
  role: 'staff';
  permissions: string[];
  assignedCustomers?: mongoose.Types.ObjectId[];
}

const StaffSchema = new Schema<IStaff>(
  {
    permissions: {
      type: [String],
      default: ['view_customers', 'view_subscriptions'],
    },
    assignedCustomers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
      },
    ],
  },
  {
    discriminatorKey: 'role',
  }
);

export const Staff = User.discriminator<IStaff>('staff', StaffSchema);

