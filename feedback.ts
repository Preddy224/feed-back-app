import { Router, Request, Response } from 'express';

const router: Router = Router();

interface Feedback {
  name: string;
  feedback: string;
}

const feedbackEntries: Feedback[] = [];

// Retrieve all feedback entries
router.get('/', (req: Request, res: Response) => {
  res.json(feedbackEntries);
});

// Submit new feedback
router.post('/', (req: Request, res: Response) => {
  const { name, feedback }: Feedback = req.body;

  if (!name || !feedback) {
    return res.status(400).send('Name and feedback are required');
  }

  feedbackEntries.push({ name, feedback });
  res.status(201).send('Feedback submitted successfully');
});

export default router;
