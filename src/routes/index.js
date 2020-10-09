import { Router } from 'express';
import creditorRoutes from './creditor';

const routes = new Router();

routes.use(creditorRoutes);

export default routes;
