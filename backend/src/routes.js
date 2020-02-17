import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CourseController from './app/controllers/CourseController';
import AnalysisController from './app/controllers/AnalysisController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/courses', CourseController.index);
routes.post('/analysis', AnalysisController.store);

export default routes;