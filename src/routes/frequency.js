import { Router } from 'express';
import FrequencyController from '../app/controllers/FrequencyController';

const routes = Router();

routes.get('/frequency', FrequencyController.show);
routes.post('/frequency', FrequencyController.store);

export default routes;
