import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioControllers';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',usuarioController.add);
router.get('/query',usuarioController.query);
router.get('/list',usuarioController.list);
router.put('/update',usuarioController.update);
router.delete('/remove',usuarioController.remove);
router.put('/activate',usuarioController.activate);
router.put('/desactivate',usuarioController.desactivate);

router.post('/login',usuarioController.login);

export default router;