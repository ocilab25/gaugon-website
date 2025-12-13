import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGO_POOL_SIZE = parseInt(process.env.MONGO_POOL_SIZE || '10', 10);

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is not set');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: MONGO_POOL_SIZE,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log('[MongoDB] Connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

declare global {
  var mongoose: {
    conn: any;
    promise: Promise<any> | null;
  };
}

