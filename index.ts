import express, { Application, Request, Response } from 'express';
import feedbackRouter from './routes/feedback';
import rateLimit from 'express-rate-limit';

const app: Application = express();
const port: number = 3000;

// Middleware
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1, // Limit each IP to 1 request per windowMs
});
app.use('/feedback', limiter);

// Routes
app.use('/feedback', feedbackRouter);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
