import Vue from 'vue'
import App from './App.vue'
import store from '~admin/store'
import router from '~admin/router'
import i18n from '~admin/plugins/i18n'
import '~admin/components'
import axios from 'axios'

// plugins
import VueBootstrap from 'bootstrap-vue'
import VueInsProgressBar from 'vue-ins-progress-bar'
import VueCustomScrollbar from 'vue-custom-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import VueHljs from 'vue-hljs'
import DateRangePicker from 'vue2-daterange-picker'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import VueColorPicker from '@caohenghu/vue-colorpicker'
import VueCountdown from '@chenfengyuan/vue-countdown'
import VueMaskedInput from 'vue-maskedinput'
import wysiwyg from "vue-wysiwyg"
import '~admin/plugins'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import VueEasytable from "vue-easytable";
Vue.use(VueCompositionAPI)

// VueStudio SCSS
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'
import '@fullcalendar/bootstrap/main.css'
import 'vue-hljs/dist/vue-hljs.min.css'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import 'vue-wysiwyg/dist/vueWysiwyg.css'
import "vue-easytable/libs/theme-default/index.css";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(wysiwyg, { maxHeight: '300px'})
Vue.use(VueBootstrap)
Vue.use(VueHljs)
Vue.use(VueEasytable);
Vue.use(VueInsProgressBar, {
  position: 'fixed',
  show: true,
  height: '3px'
})
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('vue-custom-scrollbar', VueCustomScrollbar)
Vue.component('apexchart', VueApexCharts)
Vue.component('date-range-picker', DateRangePicker)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.component('vue-color-picker', VueColorPicker)
Vue.component('vue-masked-input', VueMaskedInput)
Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  i18n,
  store,
  router,
  ...App
})
