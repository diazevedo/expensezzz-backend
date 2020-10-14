import { Router } from 'express';
import sessionRoutes from './session';
import creditorRoutes from './creditor';
import userRoutes from './user';
import creditorTypeRoutes from './creditorType';

import checkTokenMD from '../app/middlewares/jwt';

const routes = new Router();

routes.use(sessionRoutes);

/** At the moment we wont use authentication to user's route as
 * we just create a session or store a new user
 */
routes.use(userRoutes);

/** Auth is required to routes below */
routes.use(checkTokenMD);
routes.use(creditorRoutes);
routes.use(creditorTypeRoutes);

export default routes;
