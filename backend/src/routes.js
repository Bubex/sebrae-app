import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CourseController from './app/controllers/CourseController';
import AnalysisController from './app/controllers/AnalysisController';
import LevelController from './app/controllers/LevelController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/access-trail', CourseController.index);
routes.post('/generate-trail', CourseController.sort);
routes.get('/levels', LevelController.index);
routes.post('/analysis', AnalysisController.store);

export default routes;