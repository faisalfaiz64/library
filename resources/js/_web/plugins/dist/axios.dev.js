"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("~/store"));

var _router = _interopRequireDefault(require("~/router"));

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

var _i18n = _interopRequireDefault(require("~/plugins/i18n"));

var _izitoast = _interopRequireDefault(require("izitoast"));

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
}); // Response interceptor


_axios["default"].interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // You can extract message from your API, if you want
  var message = error.response.data.message;
  var status = error.response.status;

  if (status === 401) {
    _izitoast["default"].error({
      title: 'Error Code: 401',
      message: 'Something went wrong, Please contact the technical team.',
      variant: 'error',
      position: 'bottomRight'
    });
  }

  if (status === 500) {
    _izitoast["default"].error({
      title: 'Error Code: 500',
      message: 'Something went wrong, Please contact the technical team.',
      variant: 'error',
      position: 'bottomRight'
    });
  }

  return Promise.reject(error);
});
/*
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    Vue.prototype.$toast.error('500', 'Whoops!');
  }

  if (status === 401 && store.getters['auth/check']) {
    Vue.prototype.$toast.error('401', 'Whoops!');
  }

  if (status === 422 && store.getters['auth/check']) {
    Vue.prototype.$toast.error('422', 'Whoops!');
  }

  return Promise.reject(error)
})
*/