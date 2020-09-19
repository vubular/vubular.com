import Vue from 'vue'
Vue.config.devtools = true;

import App from './App.vue'

import 'tailwindcss/dist/tailwind.min.css';
import 'buefy/dist/buefy.min.css';

import Buefy from 'buefy';
Vue.use(Buefy);

import DataBrowser from '@vubular/data-browser';
Vue.use(DataBrowser);

import Layout from '@vubular/layout';
Vue.use(Layout);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
