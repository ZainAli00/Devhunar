import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import testimonialsRouter from './routes/testimonials';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
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

app.listen(PORT, () => {
  console.log(`Devhunar API running at http://localhost:${PORT}`);
});
