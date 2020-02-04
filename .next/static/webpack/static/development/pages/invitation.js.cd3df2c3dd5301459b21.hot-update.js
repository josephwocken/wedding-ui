webpackHotUpdate("static\\development\\pages\\invitation.js",{

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TableCell */ "./components/TableCell.js");





var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\TableRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var TableRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TableRow, _React$Component);

  function TableRow(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableRow);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TableRow).call(this, props));
    _this.state = {
      'rowId': props.rowId,
      'row': props.row
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TableRow, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          rowId = _this$state.rowId,
          row = _this$state.row;
      console.log("in TableRow: rowId: ".concat(rowId, ", row: ").concat(row));
      return __jsx("tr", {
        key: rowId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, row.map(function (rowElement) {
        __jsx("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, __jsx(_components_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          data: rowElement,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }));
      }));
    }
  }]);

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ })

})
//# sourceMappingURL=invitation.js.cd3df2c3dd5301459b21.hot-update.js.map