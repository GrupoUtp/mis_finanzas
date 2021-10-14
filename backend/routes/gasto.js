import routerx from 'express-promise-router';
import gastocontroller from '../controllers/GastoControllers';

const router = routerx();

router.post('/add',gastocontroller.add);
router.get('/query',gastocontroller.query);
router.get('/list',gastocontroller.list);
router.put('/update',gastocontroller.update);
router.delete('/remove',gastocontroller.remove);
router.put('/activate',gastocontroller.activate);
router.put('/desactivate',gastocontroller.desactivate);

export default router;