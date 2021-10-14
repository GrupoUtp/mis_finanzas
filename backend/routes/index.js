import routerx from 'express-promise-router';
import gastoRouter from './gasto';
/*import tipoGastoRouter from './tipoGasto';*/
import usuarioRouter from './usuario';
import ingresoRouter from './ingresos';

const router = routerx();

router.use('/gasto', gastoRouter);
/*router.use('/tipoGasto', tipoGastoRouter);*/
router.use('/usuario', usuarioRouter);
router.use('/ingreso', ingresoRouter);

export default router;