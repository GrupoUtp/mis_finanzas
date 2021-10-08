import routerx from 'express-promise-router';
import gastocontroller from '../controllers/GastoControllers';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',auth.verifyUser,gastocontroller.add);
router.get('/query',auth.verifyUser,gastocontroller.query);
router.get('/list',auth.verifyUser,gastocontroller.list);
router.put('/update',auth.verifyUser,gastocontroller.update);
router.delete('/remove',auth.verifyUser,gastocontroller.remove);
router.put('/activate',auth.verifyUser,gastocontroller.activate);
router.put('/desactivate',auth.verifyUser,gastocontroller.desactivate);

export default router;