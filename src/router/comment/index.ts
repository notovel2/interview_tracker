import { Router } from 'express';
import { useAuth } from '../../middleware/auth/auth.middleware';
import { createCommentController, deleteCommentController, getAllCommentController, updateCommentController } from '../../controller/comment/comment.controller';

const commentRouter = Router();

commentRouter.use(useAuth());

commentRouter.get('/', getAllCommentController);

commentRouter.post('/', createCommentController);

commentRouter.put('/:id', updateCommentController);

commentRouter.delete('/:id', deleteCommentController);

export default commentRouter;