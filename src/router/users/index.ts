import { Router } from 'express';
import { createUserController, getUserController } from '../../controller/user/user.controller';

const userRouter = Router();


userRouter.get('/', getUserController);

userRouter.post('/', createUserController);

export default userRouter;