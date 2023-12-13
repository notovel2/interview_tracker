import { Router } from 'express';
import { useAuth } from '../../middleware/auth/auth.middleware';
import { createInterviewController, getAllInterviewController, updateInterviewStatusController } from '../../controller/interview/interview.controller';

const interviewRouter = Router();

interviewRouter.use(useAuth());

interviewRouter.get('/', getAllInterviewController);

interviewRouter.post('/', createInterviewController);

interviewRouter.put('/:id/status', updateInterviewStatusController);

export default interviewRouter;