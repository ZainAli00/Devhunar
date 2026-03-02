import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import testimonialsRouter from './routes/testimonials';
import contactRouter from './routes/contact';

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL] : []),
];

export const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/projects', projectsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/contact', contactRouter);
