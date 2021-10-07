import Vue from 'vue';
import App from './views/Login.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import router from '@/router';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
