import routerx from 'express-promise-router';
import gastoRouter from './gasto';
/*import tipoGastoRouter from './tipoGasto';*/
import usuarioRouter from './usuario';

const router = routerx();

router.use('/gasto', gastoRouter);
/*router.use('/tipoGasto', tipoGastoRouter);*/
router.use('/usuario', usuarioRouter);
export default router;