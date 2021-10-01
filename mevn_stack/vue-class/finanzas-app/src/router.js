import Vue from 'vue';
import Router from 'vue-router';
import InterfazUsu from '@/views/InterfazUsu';
import Error from '@/views/Error404';
import Ingresos from '@/views/Ingresos';
import Egresos from '@/views/Egresos';
import Consolidado from '@/views/Consolidado';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'InterfazUsu',
            component: InterfazUsu
        },
        {
            path: '*',
            name: 'error',
            component: Error
        },
        {
            path: '/ingresos',
            name: 'Ingresos',
            component: Ingresos
        },
        {
            path: '/egresos',
            name: 'Egresos',
            component: Egresos
        },
        {
            path: '/consolidado',
            name: 'Consolidado',
            component: Consolidado
        }
    ],
})