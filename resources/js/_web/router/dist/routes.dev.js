"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CustomerSurvey = function CustomerSurvey() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~/pages/customer'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Index = function Index() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~/pages/index'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var LoginPage = function LoginPage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~/pages/login'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var ThanksPage = function ThanksPage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~/pages/thanks'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var _default = [{
  path: '/survey/:slug',
  name: 'customersurvey',
  component: CustomerSurvey
}, {
  path: '/',
  name: 'index',
  component: Index
}, {
  path: '/login',
  name: 'login',
  component: LoginPage
}, {
  path: '/thankyou',
  name: 'thanks',
  component: ThanksPage
}, {
  path: '*',
  redirect: '/login'
}];
exports["default"] = _default;