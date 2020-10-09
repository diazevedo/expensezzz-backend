import { Router } from 'express';

import CreditorController from '../app/controllers/CreditorController';

const routes = Router();

routes.get('/creditors', CreditorController.show);

export default routes;
