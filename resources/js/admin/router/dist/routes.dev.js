"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/auth/login'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Admin = function Admin() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/admin'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Dashboard = function Dashboard() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/Dashboard'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Reports = function Reports() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/Reports'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Products = function Products() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/Products'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var BranchesCreate = function BranchesCreate() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/branch/Create'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var BranchesList = function BranchesList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/branch/List'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Locations = function Locations() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/Locations'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var Settings = function Settings() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/Settings'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var SurveyAdd = function SurveyAdd() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/survey/Add'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var SurveyList = function SurveyList() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/survey/List'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var SurveyResponses = function SurveyResponses() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('~admin/pages/survey/Responses'));
  }).then(function (m) {
    return m["default"] || m;
  });
};

var _default = [{
  path: '*',
  redirect: '/admin/dashboard'
}, {
  path: '/admin/login',
  name: 'login',
  component: Login
}, {
  path: '/admin',
  component: Admin,
  children: [{
    path: '',
    redirect: '/admin/dashboard'
  }, {
    path: 'dashboard',
    name: 'admin.dashboard',
    component: Dashboard
  }, {
    path: 'reports',
    name: 'admin.reports',
    component: Reports
  }, {
    path: 'survey/add',
    name: 'admin.survey.add',
    component: SurveyAdd
  }, {
    path: 'survey/list',
    name: 'admin.survey.list',
    component: SurveyList
  }, {
    path: 'survey/responses',
    name: 'admin.survey.responses',
    component: SurveyResponses
  }, {
    path: 'products/list',
    name: 'admin.products.list',
    component: Products
  }, {
    path: 'branches/create',
    name: 'admin.branches.create',
    component: BranchesCreate
  }, {
    path: 'branches/list',
    name: 'admin.branches.list',
    component: BranchesList
  }, {
    path: 'locations',
    name: 'admin.locations',
    component: Locations
  }, {
    path: 'settings',
    name: 'admin.settings',
    component: Settings
  }]
}];
exports["default"] = _default;