import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Database health check
router.get('/db', async (req: Request, res: Response) => {
  try {
    const state = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];

    res.json({
      status: states[state],
      host: mongoose.connection.host,
      database: mongoose.connection.name,
    });
  } catch (error) {
    res.status(500).json({ error: 'Database health check failed' });
  }
});

// General health check
router.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;

