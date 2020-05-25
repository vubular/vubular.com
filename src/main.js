import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import 'bulma/css/bulma.css'

import Buefy from 'buefy';
Vue.use(Buefy);

import DataBrowser from '@vubular/data-browser';
Vue.use(DataBrowser);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
