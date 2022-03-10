"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _store = _interopRequireDefault(require("~/store"));

var _router = _interopRequireDefault(require("~/router"));

var _i18n = _interopRequireDefault(require("~/plugins/i18n"));

var _App = _interopRequireDefault(require("~/components/App"));

var _localforage = _interopRequireDefault(require("localforage"));

require("~/plugins");

require("~/components");

var _vueScrollactive = _interopRequireDefault(require("vue-scrollactive"));

var _vue2Hammer = require("vue2-hammer");

var _vuesax = _interopRequireDefault(require("vuesax"));

require("vuesax/dist/vuesax.css");

var _vueIzitoast = _interopRequireDefault(require("vue-izitoast"));

require("izitoast/dist/css/iziToast.min.css");

var _vueAnalytics = _interopRequireDefault(require("vue-analytics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import Service Worker Registry
require('./sw-registry');

_vue["default"].config.productionTip = false; // localforage.config({
//   driver      : localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
//   name        : 'IbrahimalQurashi',
//   version     : 1.0,
//   size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//   storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
//   description : 'Survey PWA App'
// });

var VueScrollTo = require('vue-scrollto');

_vue["default"].use(VueScrollTo);

_vue["default"].use(_vueScrollactive["default"]);

_vue["default"].use(require('vue-moment'));

_vue["default"].use(_vue2Hammer.VueHammer);

_vue["default"].use(_vuesax["default"]);

var defaultOptionsObject = {
  timeout: 10000,
  close: true,
  overlay: false
};

_vue["default"].use(_vueIzitoast["default"], defaultOptionsObject);

_vue["default"].use(_vueAnalytics["default"], {
  id: 'UA-50306934-2'
});

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
/* eslint-disable no-new */

new _vue["default"](_objectSpread({
  i18n: _i18n["default"],
  store: _store["default"],
  router: _router["default"]
}, _App["default"]));