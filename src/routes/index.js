import { Router } from 'express';
import creditorRoutes from './creditor';
import userRoutes from './user';

const routes = new Router();

routes.use(creditorRoutes);
routes.use(userRoutes);

export default routes;
