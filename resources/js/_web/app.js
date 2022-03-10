// Import Service Worker Registry
require('./sw-registry');

import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import localforage from "localforage";

import '~/plugins'
import '~/components'


Vue.config.productionTip = false


// localforage.config({
//   driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
//   name        : 'IbrahimalQurashi',
//   version     : 1.0,
//   size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//   storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
//   description : 'Survey PWA App'
// });

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive);

Vue.use(require('vue-moment'));

import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)

import VueIziToast from 'vue-izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const defaultOptionsObject = {
	timeout: 10000,
	close: true,
	overlay: false,
}
Vue.use(VueIziToast, defaultOptionsObject);

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'UA-50306934-2'
});

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
