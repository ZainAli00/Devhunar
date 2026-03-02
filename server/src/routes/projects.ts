import { Router } from 'express';
import { projects } from '../data/projects';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ success: true, data: projects });
});

router.get('/:id', (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    res.status(404).json({ success: false, message: 'Project not found' });
    return;
  }
  res.json({ success: true, data: project });
});

export default router;
