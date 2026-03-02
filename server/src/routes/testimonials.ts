import { Router } from 'express';
import { testimonials } from '../data/testimonials';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ success: true, data: testimonials });
});

export default router;
