import { Router } from 'express';
import { z } from 'zod';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

router.post('/', (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  const { name, email, message } = result.data;

  // In production: send email, save to DB, etc.
  console.log(`[Contact] New inquiry from ${name} <${email}>: ${message.slice(0, 80)}...`);

  res.json({
    success: true,
    message: `Thanks ${name}! We got your message and will reply to ${email} within 24 hours.`,
  });
});

export default router;
