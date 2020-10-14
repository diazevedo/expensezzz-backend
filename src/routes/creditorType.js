import { Router } from 'express';
import CreditorTypeController from '../app/controllers/CreditorTypeController';

const routes = Router();

routes.get('/creditortypes', CreditorTypeController.show);
routes.post('/creditortypes', CreditorTypeController.store);

export default routes;
