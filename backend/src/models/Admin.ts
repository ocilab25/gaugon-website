import mongoose, { Schema } from 'mongoose';
import { User, IUser } from './User';

export interface IAdmin extends IUser {
  role: 'admin';
  permissions: string[];
  lastLogin?: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    permissions: {
      type: [String],
      default: [
        'view_customers',
        'manage_staff',
        'manage_subscriptions',
        'view_all_data',
      ],
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    discriminatorKey: 'role',
  }
);

export const Admin = User.discriminator<IAdmin>('admin', AdminSchema);

