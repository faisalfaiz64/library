"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SurveyDAO = void 0;

var _db = require("./db");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SurveyDAO =
/*#__PURE__*/
function () {
  function SurveyDAO() {
    _classCallCheck(this, SurveyDAO);
  }

  _createClass(SurveyDAO, [{
    key: "get",
    value: function get() {
      return _db.db.survey.where('product').noneOf('null').toArray();
    }
  }, {
    key: "delete",
    value: function _delete() {
      return _db.db.survey.clear();
    }
  }, {
    key: "save",
    value: function save(survey) {
      return _db.db.survey.add(survey);
    }
  }, {
    key: "getBranch",
    value: function getBranch() {
      return _db.db.branch.toArray();
    }
  }, {
    key: "saveBranch",
    value: function saveBranch(branch) {
      return _db.db.branch.put({
        id: 1,
        branch_id: branch
      });
    }
  }, {
    key: "deleteProducts",
    value: function deleteProducts() {
      return _db.db.products.clear();
    }
  }, {
    key: "saveProducts",
    value: function saveProducts(products) {
      return _db.db.products.add(products);
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return _db.db.products.toArray();
    }
  }, {
    key: "getProduct",
    value: function getProduct(product) {
      return _db.db.products.where({
        product_id: product
      }).toArray();
    }
  }, {
    key: "update",
    value: function update(id, survey) {
      return _db.db.survey.update(id, survey);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      return new SurveyDAO();
    }
  }]);

  return SurveyDAO;
}();

exports.SurveyDAO = SurveyDAO;