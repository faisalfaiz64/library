"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _fontawesome = _interopRequireDefault(require("@fortawesome/fontawesome"));

require("@fortawesome/fontawesome-free-regular/shakable.es");

var _shakable2 = require("@fortawesome/fontawesome-free-solid/shakable.es");

var _shakable3 = require("@fortawesome/fontawesome-free-brands/shakable.es");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_fontawesome["default"].library.add(_shakable2.faUser, _shakable2.faLock, _shakable2.faSignOutAlt, _shakable2.faCog, _shakable3.faGithub, _shakable3.faFacebook, _shakable3.faTwitter, _shakable3.faInstagram, _shakable3.faYoutube, _shakable3.faSnapchat);

_vue["default"].component('fa', _vueFontawesome.FontAwesomeIcon);