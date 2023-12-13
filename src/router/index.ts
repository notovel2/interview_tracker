import { Router } from 'express';
import interviewRouter from './interview';
import userRouter from './users';
import authRouter from './auth';
import commentRouter from './comment';
import changelogRouter from './changelog';

const router = Router();

router.use('/interview', interviewRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/comment', commentRouter);
router.use('/changelog', changelogRouter);

export default router;