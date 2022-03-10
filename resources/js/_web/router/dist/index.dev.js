"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _store = _interopRequireDefault(require("~/store"));

var _vueMeta = _interopRequireDefault(require("vue-meta"));

var _routes = _interopRequireDefault(require("./routes"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vuexRouterSync = require("vuex-router-sync");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vueMeta["default"]);

_vue["default"].use(_vueRouter["default"]); // The middleware for every page of the application.


var globalMiddleware = ['locale']; // Load middleware modules dynamically.

var routeMiddleware = resolveMiddleware(require.context('~/middleware', false, /.*\.js$/));
var router = createRouter();
(0, _vuexRouterSync.sync)(_store["default"], router);
var _default = router;
/**
 * Create a new router instance.
 *
 * @return {Router}
 */

exports["default"] = _default;

function createRouter() {
  var router = new _vueRouter["default"]({
    scrollBehavior: scrollBehavior,
    mode: 'history',
    routes: _routes["default"]
  });
  router.beforeEach(beforeEach);
  router.afterEach(afterEach);
  return router;
}
/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */


function beforeEach(to, from, next) {
  var components, middleware;
  return regeneratorRuntime.async(function beforeEach$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(resolveComponents(router.getMatchedComponents(_objectSpread({}, to))));

        case 2:
          components = _context.sent;

          if (!(components.length === 0)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", next());

        case 5:
          if (to.params.slug) {
            _axios["default"].post('/api/v1/survey/public', {
              slug: to.params.slug
            }).then(function (response) {
              if (response.data.slug !== to.params.slug) next({
                name: 'login'
              });
            })["catch"](function (error) {
              console.log(error);
            });
          } // Start the loading bar.


          if (components[components.length - 1].loading !== false) {
            router.app.$nextTick(function () {
              return router.app.$loading.start();
            });
          } // Get the middleware for all the matched components.


          middleware = getMiddleware(components); // Call each middleware.

          callMiddleware(middleware, to, from, function () {
            // Set the application layout only if "next()" was called with no args.
            if (arguments.length === 0) {
              router.app.setLayout(components[0].layout || '');
            }

            next.apply(void 0, arguments);
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */


function afterEach(to, from, next) {
  return regeneratorRuntime.async(function afterEach$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(router.app.$nextTick());

        case 2:
          router.app.$loading.finish();

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}
/**
 * Call each middleware.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */


function callMiddleware(middleware, to, from, next) {
  var stack = middleware.reverse();

  var _next = function _next() {
    // Stop if "_next" was called with an argument or the stack is empty.
    if (arguments.length > 0 || stack.length === 0) {
      if (arguments.length > 0) {
        router.app.$loading.finish();
      }

      return next.apply(void 0, arguments);
    }

    var middleware = stack.pop();

    if (typeof middleware === 'function') {
      middleware(to, from, _next);
    } else if (routeMiddleware[middleware]) {
      routeMiddleware[middleware](to, from, _next);
    } else {
      throw Error("Undefined middleware [".concat(middleware, "]"));
    }
  };

  _next();
}
/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */


function resolveComponents(components) {
  return Promise.all(components.map(function (component) {
    return typeof component === 'function' ? component() : component;
  }));
}
/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */


function getMiddleware(components) {
  var middleware = [].concat(globalMiddleware);
  components.filter(function (c) {
    return c.middleware;
  }).forEach(function (component) {
    if (Array.isArray(component.middleware)) {
      middleware.push.apply(middleware, _toConsumableArray(component.middleware));
    } else {
      middleware.push(component.middleware);
    }
  });
  return middleware;
}
/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */


function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    return {
      selector: to.hash
    };
  }

  var _router$getMatchedCom = router.getMatchedComponents(_objectSpread({}, to)).slice(-1),
      _router$getMatchedCom2 = _slicedToArray(_router$getMatchedCom, 1),
      component = _router$getMatchedCom2[0];

  if (component && component.scrollToTop === false) {
    return {};
  }

  return {
    x: 0,
    y: 0
  };
}
/**
 * @param  {Object} requireContext
 * @return {Object}
 */


function resolveMiddleware(requireContext) {
  return requireContext.keys().map(function (file) {
    return [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)];
  }).reduce(function (guards, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        guard = _ref2[1];

    return _objectSpread({}, guards, _defineProperty({}, name, guard["default"]));
  }, {});
}