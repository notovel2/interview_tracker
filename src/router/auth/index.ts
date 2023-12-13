import { Router } from 'express';
import { DataTypes, Sequelize } from 'sequelize';
import { loginController } from '../../controller/auth/auth.controller';

const authRouter = Router();

authRouter.post('/login', loginController);

export default authRouter;