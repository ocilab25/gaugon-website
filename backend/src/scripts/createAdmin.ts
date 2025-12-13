import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { Admin } from '../models/Admin';

dotenv.config();

async function createAdmin() {
  try {
    // Connect to database
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    await mongoose.connect(MONGODB_URI);
    console.log('[MongoDB] Connected');

    // Get admin details from command line args or use defaults
    const email = process.argv[2] || 'admin@gaugon.com';
    const password = process.argv[3] || 'Admin123!@#';

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log(`[Admin] Admin with email ${email} already exists`);
      process.exit(0);
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await Admin.create({
      email,
      passwordHash,
      role: 'admin',
      permissions: [
        'view_customers',
        'manage_staff',
        'manage_subscriptions',
        'view_all_data',
      ],
    });

    console.log(`[Admin] Admin created successfully:`);
    console.log(`  Email: ${admin.email}`);
    console.log(`  ID: ${admin._id}`);
    console.log(`  Role: ${admin.role}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('[Admin] Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();

