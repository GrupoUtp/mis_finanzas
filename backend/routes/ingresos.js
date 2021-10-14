import routerx from 'express-promise-router';
import ingresoController from '../controllers/IngresoControllers';

const router = routerx();

router.post('/add',ingresoController.add);
router.get('/query',ingresoController.query);
router.get('/list',ingresoController.list);
router.put('/update',ingresoController.update);
router.delete('/remove',ingresoController.remove);
router.put('/activate',ingresoController.activate);
router.put('/desactivate',ingresoController.desactivate);

export default router;