import { Router } from 'express';
import taskRoutes from './task.routes';

const router = Router();

router.use('/tasks', taskRoutes);

export default router;
