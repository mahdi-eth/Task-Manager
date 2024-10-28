import express, { Application } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import routes from './routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// API Routes
app.use('/api', routes);

export default app;
