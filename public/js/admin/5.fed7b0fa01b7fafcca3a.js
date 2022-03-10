(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ \"./node_modules/vform/dist/vform.common.js\");\n/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  el: '#announcementForm',\n  data: function data() {\n    return {\n      title: '',\n      isbn: ''\n    };\n  },\n  methods: {\n    processForm: function processForm() {\n      var _this2 = this;\n\n      var _this = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/apiadmin/v1/book/create', {\n        title: this.title,\n        isbn: this.isbn\n      }).then(function (response) {\n        _this.items = response.data.data;\n        console.log(_this.items);\n\n        _this2.$bvToast.toast('Book has been added', {\n          title: 'Upload',\n          variant: 'success',\n          noAutoHide: false,\n          solid: true\n        });\n\n        _this2.$router.push('/books');\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2FkbWluL3BhZ2VzL0Jvb2tDcmVhdGUudnVlPzUxMmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBU0E7QUFDQTtBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQSxPQVhBO0FBWUE7QUFmQTtBQVRBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9hZG1pbi9wYWdlcy9Cb29rQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8IS0tIEJFR0lOICNjb250ZW50IC0tPlxyXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cImFwcC1jb250ZW50XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIDxzbWFsbD5Cb29rPC9zbWFsbD5cclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJhbm5vdW5jZW1lbnRGb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwicHJvY2Vzc0Zvcm1cIj5cclxuICAgICAgICA8Yi1jYXJkIHRpdGxlPVwiQm9vayBEZXRhaWxzXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgIDxiLWZvcm0taW5wdXQgIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZSBOYW1lXCIgdi1tb2RlbD1cIm5hbWVcIj48L2ItZm9ybS1pbnB1dD5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzPVwibWItMlwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiaXNiblwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiID5JU0JOPC9sYWJlbD5cclxuICAgICAgICA8Yi1mb3JtLWlucHV0ICB0eXBlPVwidGV4dFwiIG5hbWU9XCJpc2JuXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBJU0JOXCIgdi1tb2RlbD1cImlzYm5cIj48L2ItZm9ybS1pbnB1dD5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgIDxiLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiBhY3RpdmUgc2l6ZT1cImxnXCI+U3VibWl0PC9iLWJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRU5EICNjb250ZW50IC0tPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZWw6ICcjYW5ub3VuY2VtZW50Rm9ybScsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcblx0XHR0aXRsZTogJycsXHJcbiAgICBpc2JuOiAnJyxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOntcclxuICAgIHByb2Nlc3NGb3JtOiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGlhZG1pbi92MS9ib29rL2NyZWF0ZScsIHt0aXRsZTogdGhpcy50aXRsZSxpc2JuOiB0aGlzLmlzYm59KS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdF90aGlzLml0ZW1zID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3RoaXMuaXRlbXMpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLiRidlRvYXN0LnRvYXN0KCdCb29rIGhhcyBiZWVuIGFkZGVkJywge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVXBsb2FkJyxcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgbm9BdXRvSGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2Jvb2tzJyk7XHJcblx0ICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {}\nvar staticRenderFns = []\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/ZWI4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9hZG1pbi9wYWdlcy9Cb29rQ3JlYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDY4ZGY0ZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge31cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&\n");

/***/ }),

/***/ "./resources/js/admin/pages/BookCreate.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/pages/BookCreate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCreate.vue?vue&type=template&id=5468df4e& */ \"./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&\");\n/* harmony import */ var _BookCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookCreate.vue?vue&type=script&lang=js& */ \"./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BookCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/admin/pages/BookCreate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/MzFjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hZG1pbi9wYWdlcy9Cb29rQ3JlYXRlLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQm9va0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ2OGRmNGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQm9va0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jvb2tDcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxccHJvamVjdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDY4ZGY0ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDY4ZGY0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDY4ZGY0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQm9va0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ2OGRmNGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQ2OGRmNGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9hZG1pbi9wYWdlcy9Cb29rQ3JlYXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/admin/pages/BookCreate.vue\n");

/***/ }),

/***/ "./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookCreate.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/YTA4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb29rQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/admin/pages/BookCreate.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookCreate.vue?vue&type=template&id=5468df4e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookCreate_vue_vue_type_template_id_5468df4e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/MmY3MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYWRtaW4vcGFnZXMvQm9va0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ2OGRmNGUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jvb2tDcmVhdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NjhkZjRlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/admin/pages/BookCreate.vue?vue&type=template&id=5468df4e&\n");

/***/ })

}]);