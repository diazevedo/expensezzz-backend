import { Router } from 'express';

import CreditorController from '../app/controllers/CreditorController';

const routes = Router();

routes.get('/creditors', CreditorController.show);
routes.post('/creditors', CreditorController.store);

export default routes;
