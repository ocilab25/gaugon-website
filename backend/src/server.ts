import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db';

// Routes
import authRoutes from './routes/auth';
import adminRoutes from './routes/admin';
import customerRoutes from './routes/customer';
import subscriptionRoutes from './routes/subscriptions';
import healthRoutes from './routes/health';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for multiple subdomains
const allowedOrigins: (string | RegExp)[] = [
  process.env.FRONTEND_URL,
  process.env.PORTAL_URL,
  process.env.ADMIN_URL,
].filter(Boolean) as string[];

// If wildcard domain is provided, allow all subdomains
if (process.env.FRONTEND_URL?.includes('*.gaugon.com')) {
  allowedOrigins.push(/^https:\/\/.*\.gaugon\.com$/);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      // Check if origin matches allowed origins
      const isAllowed = allowedOrigins.some((allowed) => {
        if (typeof allowed === 'string') {
          return origin === allowed;
        }
        if (allowed instanceof RegExp) {
          return allowed.test(origin);
        }
        return false;
      });

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route to prevent 404
app.get('/', (req, res) => {
  res.json({
    message: 'Gaugon API is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// Health check (before auth)
app.use('/api/health', healthRoutes);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('[Server] Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Connect to database and start server
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`[Server] Running on port ${PORT}`);
      console.log(`[Server] Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`[CORS] Allowed origins: ${allowedOrigins.join(', ')}`);
    });
  } catch (error) {
    console.error('[Server] Failed to start:', error);
    process.exit(1);
  }
}

startServer();

export default app;

