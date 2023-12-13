import { Router } from 'express';
import { useAuth } from '../../middleware/auth/auth.middleware';
import { getAllChangelogController } from '../../controller/changelog/changelog.controller';

const changelogRouter = Router();

changelogRouter.use(useAuth());

changelogRouter.get('/', getAllChangelogController);

export default changelogRouter;
