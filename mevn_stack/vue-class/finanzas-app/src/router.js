import Vue from 'vue';
import Router from 'vue-router';
import InterfazUsu from '@/views/InterfazUsu';
import Error from '@/views/Error404';

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
        }
    ],
})