"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("~admin/store"));

var _router = _interopRequireDefault(require("~admin/router"));

var _i18n = _interopRequireDefault(require("~admin/plugins/i18n"));

require("~admin/components");

var _bootstrapVue = _interopRequireWildcard(require("bootstrap-vue"));

var _vueInsProgressBar = _interopRequireDefault(require("vue-ins-progress-bar"));

var _vueCustomScrollbar = _interopRequireDefault(require("vue-custom-scrollbar"));

var _vueApexcharts = _interopRequireDefault(require("vue-apexcharts"));

var _vueHljs = _interopRequireDefault(require("vue-hljs"));

var _vue2DaterangePicker = _interopRequireDefault(require("vue2-daterange-picker"));

var VueGoogleMaps = _interopRequireWildcard(require("vue2-google-maps"));

var _vueBootstrapTypeahead = _interopRequireDefault(require("vue-bootstrap-typeahead"));

var _vueColorpicker = _interopRequireDefault(require("@caohenghu/vue-colorpicker"));

var _vueCountdown = _interopRequireDefault(require("@chenfengyuan/vue-countdown"));

var _vueMaskedinput = _interopRequireDefault(require("vue-maskedinput"));

var _vueWysiwyg = _interopRequireDefault(require("vue-wysiwyg"));

require("~admin/plugins");

require("@fortawesome/fontawesome-free/css/all.css");

require("@fortawesome/fontawesome-free/js/all.js");

require("@fullcalendar/core/main.css");

require("@fullcalendar/daygrid/main.css");

require("@fullcalendar/timegrid/main.css");

require("@fullcalendar/list/main.css");

require("@fullcalendar/bootstrap/main.css");

require("vue-hljs/dist/vue-hljs.min.css");

require("vue2-daterange-picker/dist/vue2-daterange-picker.css");

require("vue-wysiwyg/dist/vueWysiwyg.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].config.productionTip = false;

_vue["default"].use(_vueWysiwyg["default"], {
  maxHeight: '300px'
});

_vue["default"].use(_bootstrapVue["default"]);

_vue["default"].use(_vueHljs["default"]);

_vue["default"].use(_vueInsProgressBar["default"], {
  position: 'fixed',
  show: true,
  height: '3px'
});

_vue["default"].use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
});

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].use(_bootstrapVue.IconsPlugin);

_vue["default"].component('vue-custom-scrollbar', _vueCustomScrollbar["default"]);

_vue["default"].component('apexchart', _vueApexcharts["default"]);

_vue["default"].component('date-range-picker', _vue2DaterangePicker["default"]);

_vue["default"].component('vue-bootstrap-typeahead', _vueBootstrapTypeahead["default"]);

_vue["default"].component('vue-color-picker', _vueColorpicker["default"]);

_vue["default"].component('vue-masked-input', _vueMaskedinput["default"]);

_vue["default"].component(_vueCountdown["default"].name, _vueCountdown["default"]);

new _vue["default"](_objectSpread({
  i18n: _i18n["default"],
  store: _store["default"],
  router: _router["default"]
}, _App["default"]));