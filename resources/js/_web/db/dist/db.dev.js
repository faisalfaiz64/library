"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _dexie = _interopRequireDefault(require("dexie"));

var _survey = require("./models/survey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _dexie["default"]('IbrahimQurashiDB');
exports.db = db;
db.version(1).stores({
  survey: '++id, fullname, phone, gender, product, feedback, survey, branch, timestsamp',
  branch: '++id, branch_id, timestsamp',
  products: '++id, product_id, name, code, image, survey_id'
});
db.open();
db.survey.mapToClass(_survey.Survey);