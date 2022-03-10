"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("~admin/store"));

var _router = _interopRequireDefault(require("~admin/router"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

var _i18n = _interopRequireDefault(require("~admin/plugins/i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
_axios["default"].defaults.withCredentials = true; // Request interceptor

_axios["default"].interceptors.request.use(function (request) {
  var token = _store["default"].getters['auth/token'];

  if (token) {
    request.headers.common['Authorization'] = "Bearer ".concat(token);
  }

  var locale = _store["default"].getters['lang/locale'];

  if (locale) {
    request.headers.common['Accept-Language'] = locale;
  } // request.headers['X-Socket-Id'] = Echo.socketId()


  return request;
});

_axios["default"].interceptors.request.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response);
}); // Response interceptor
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     // You can extract message from your API, if you want
//     const message = 'Something went wrong'
//     iziToast.show({
// 	    title: 'Ups!!',
// 	    message: `${message}`,
// 		variant: 'error'
// 	});
//     return Promise.reject(error)
//   },
// )