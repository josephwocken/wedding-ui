module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const linkStyle = {
  marginRight: 15,
  textDecoration: 'underline'
};

const Header = () => __jsx("div", {
  className: "jsx-3512935604",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-3512935604",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-3512935604",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/guest_list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-3512935604",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Guest List")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/search_invitations",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-3512935604",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Search Invitations")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3512935604",
  __self: undefined
}, "h1.jsx-3512935604,a.jsx-3512935604{font-family:'Arial';}ul.jsx-3512935604{padding:0;}li.jsx-3512935604{list-style:none;margin:5px 0;}a.jsx-3512935604{-webkit-text-decoration:underline;text-decoration:underline;color:blue;margin:15px;}a.jsx-3512935604:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZ0IsQUFJNkIsQUFJVixBQUlNLEFBS1UsQUFNZCxVQWRkLEVBZUEsSUFYZSxJQVJmLFNBU0EsK0JBSWEsV0FDQyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTUsXHJcbiAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXHJcbn07XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YT5Ib21lPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICA8YT5BYm91dDwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxMaW5rIGhyZWY9XCIvZ3Vlc3RfbGlzdFwiPlxyXG4gICAgICA8YT5HdWVzdCBMaXN0PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPExpbmsgaHJlZj1cIi9zZWFyY2hfaW52aXRhdGlvbnNcIj5cclxuICAgICAgPGE+U2VhcmNoIEludml0YXRpb25zPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBoMSxcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\components\\\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableHeader */ "./components/TableHeader.js");
/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableRow */ "./components/TableRow.js");
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Table extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      'tableHeader': props.tableHeader,
      'tableRows': props.tableRows
    };
  }

  render() {
    const {
      tableHeader,
      tableRows
    } = this.state;
    var rowIdCounter = 0;
    console.log(`in Table. table header: ${tableHeader}`);
    console.log(`in Table. table rows: ${tableRows}`);

    for (var i = 0; i < tableRows.length; i++) {
      console.log(`table row at index: ${i}. row: ${tableRows[i]}`);
    }

    return __jsx("table", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_components_TableHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      header: tableHeader,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, tableRows.map(row => {
      __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        rowId: "0",
        row: row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/TableCell.js":
/*!*********************************!*\
  !*** ./components/TableCell.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\TableCell.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class TableCell extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': props.data
    };
  }

  render() {
    const {
      data
    } = this.state;
    console.log(`in TableCell. data: ${data}`);
    return __jsx("span", {
      style: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, data);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableCell);

/***/ }),

/***/ "./components/TableHeader.js":
/*!***********************************!*\
  !*** ./components/TableHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableCell */ "./components/TableCell.js");
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\TableHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class TableHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      'headerElements': props.header
    };
  }

  render() {
    const {
      headerElements
    } = this.state;
    console.log(`in TableHeader: header: ${headerElements}`);
    return __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, headerElements.map(headerElement => {
      __jsx("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_components_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: headerElement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableHeader);

/***/ }),

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TableCell */ "./components/TableCell.js");
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\TableRow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class TableRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      'rowId': props.rowId,
      'row': props.row
    };
  }

  render() {
    const {
      rowId,
      row
    } = this.state;
    console.log(`in TableRow: rowId: ${rowId}, row: ${row}`);
    return __jsx("tr", {
      key: rowId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, row.map(rowElement => {
      __jsx("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_components_TableCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: rowElement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TableRow);

/***/ }),

/***/ "./components/TableStyle.js":
/*!**********************************!*\
  !*** ./components/TableStyle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\components\\TableStyle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const TableStyle = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (TableStyle);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        // mark it as prefetched for debugging in dev
        this.pageLoader.prefetched[route] = true;
        return;
      }

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/invitation.js":
/*!*****************************!*\
  !*** ./pages/invitation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_TableStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TableStyle */ "./components/TableStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-table */ "react-bootstrap-table");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\pages\\invitation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class Invitation extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    const invitationId = ctx.query.invitationId;
    console.log(`invitation id: ${invitationId}`);
    const myUrl = 'http://localhost:8080/invitations/' + invitationId;
    console.log(`url: ${myUrl}`);
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(myUrl);
    const data = await response.json();
    return {
      invitation: data
    };
  }

  render() {
    const invitation = this.props.invitation;
    const guests = [];

    if (invitation) {
      for (var i = 0; i < invitation.guests.length; i++) {
        let guestElem = invitation.guests[i];
        guests.push({
          invitationId: invitation.invitation_id,
          guestId: guestElem.guest_id,
          guest: guestElem.guest_name,
          attending: guestElem.attending,
          meal: guestElem.meal
        });
      }
    }

    if (!invitation) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "'loading...'");
    } else {
      console.log(`got invitation: ${invitation.guests[0].attending}`);
    }

    function updateInvitation(invitationUpdate) {
      console.log(`received invitation update: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(invitationUpdate)}`);
      const invitationUpdateResponse = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:8080/invitations', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(invitationUpdate)
      }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          console.log(`success updating invitation`);
        }

        return response;
      }).catch(error => {
        console.error('Error:', error);
      });
    } // is called even when there's no change to the cell. i don't know if there's a way to get hooks into the previous state of the row from here (to tell if there's a difference)


    function onAfterSaveCell(row, cellName, cellValue) {
      const meal = row['meal'];
      const attending = row['attending'];
      const invitationId = row['invitationId'];
      const guestId = row['guestId']; // update will be on each cell, so we only need to worry about one guest being updated at a time (since each guest is a row in the table)

      let invitationUpdate = {
        invitation_id: invitationId,
        rsvped: true,
        guests: [{
          guest_id: guestId,
          attending: attending,
          meal: meal
        }]
      };
      console.log(`invitation update: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(invitationUpdate)}`);
      updateInvitation(invitationUpdate);
    }

    function onBeforeSaveCell(row, cellName, cellValue) {
      // You can do any validation on here for editing value,
      // return false for reject the editing
      if (cellName == 'meal') {
        if (cellValue != 'BURGER' && cellValue != 'CHICKEN') {
          console.log(`trying to change to invalid meal: ${cellValue}`);
          return false;
        }
      } else if (cellName == 'attending') {
        if (cellValue != 'true' && cellValue != 'false') {
          console.log(`trying to change to invalid attending: ${cellValue}`);
          return false;
        }
      }

      return true;
    }

    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: onBeforeSaveCell,
      // a hook for before saving cell
      afterSaveCell: onAfterSaveCell // a hook for after saving cell

    };

    const trStyle = (row, rowIndex) => {
      return {
        backgroundColor: '#e6d5d5'
      };
    };

    function myCellFormatter(cell, row) {
      return __jsx("div", {
        className: "jsx-778162326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-778162326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, cell), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "778162326",
        __self: this
      }, "p.jsx-778162326{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lzQixBQUlZLG9CQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZVN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRhYmxlLCBUYWJsZUhlYWRlckNvbHVtbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlJztcclxuXHJcbmNsYXNzIEludml0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbklkID0gY3R4LnF1ZXJ5Lmludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYGludml0YXRpb24gaWQ6ICR7aW52aXRhdGlvbklkfWApXHJcbiAgICBjb25zdCBteVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMvJyArIGludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYHVybDogJHtteVVybH1gKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW52aXRhdGlvbjogZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IHRoaXMucHJvcHMuaW52aXRhdGlvblxyXG4gICAgY29uc3QgZ3Vlc3RzID0gW11cclxuICAgIGlmIChpbnZpdGF0aW9uKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3Vlc3RFbGVtID0gaW52aXRhdGlvbi5ndWVzdHNbaV1cclxuICAgICAgICBndWVzdHMucHVzaCh7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uSWQ6IGludml0YXRpb24uaW52aXRhdGlvbl9pZCxcclxuICAgICAgICAgIGd1ZXN0SWQ6IGd1ZXN0RWxlbS5ndWVzdF9pZCxcclxuICAgICAgICAgIGd1ZXN0OiBndWVzdEVsZW0uZ3Vlc3RfbmFtZSxcclxuICAgICAgICAgIGF0dGVuZGluZzogZ3Vlc3RFbGVtLmF0dGVuZGluZyxcclxuICAgICAgICAgIG1lYWw6IGd1ZXN0RWxlbS5tZWFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4nbG9hZGluZy4uLic8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBnb3QgaW52aXRhdGlvbjogJHtpbnZpdGF0aW9uLmd1ZXN0c1swXS5hdHRlbmRpbmd9YClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnZpdGF0aW9uKGludml0YXRpb25VcGRhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkIGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25VcGRhdGVSZXNwb25zZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzcyB1cGRhdGluZyBpbnZpdGF0aW9uYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcyBjYWxsZWQgZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gY2hhbmdlIHRvIHRoZSBjZWxsLiBpIGRvbid0IGtub3cgaWYgdGhlcmUncyBhIHdheSB0byBnZXQgaG9va3MgaW50byB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIHJvdyBmcm9tIGhlcmUgKHRvIHRlbGwgaWYgdGhlcmUncyBhIGRpZmZlcmVuY2UpXHJcbiAgICBmdW5jdGlvbiBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1lYWwgPSByb3dbJ21lYWwnXVxyXG4gICAgICBjb25zdCBhdHRlbmRpbmcgPSByb3dbJ2F0dGVuZGluZyddXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25JZCA9IHJvd1snaW52aXRhdGlvbklkJ11cclxuICAgICAgY29uc3QgZ3Vlc3RJZCA9IHJvd1snZ3Vlc3RJZCddXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2lsbCBiZSBvbiBlYWNoIGNlbGwsIHNvIHdlIG9ubHkgbmVlZCB0byB3b3JyeSBhYm91dCBvbmUgZ3Vlc3QgYmVpbmcgdXBkYXRlZCBhdCBhIHRpbWUgKHNpbmNlIGVhY2ggZ3Vlc3QgaXMgYSByb3cgaW4gdGhlIHRhYmxlKVxyXG4gICAgICBsZXQgaW52aXRhdGlvblVwZGF0ZSA9IHtcclxuICAgICAgICBpbnZpdGF0aW9uX2lkOiBpbnZpdGF0aW9uSWQsXHJcbiAgICAgICAgcnN2cGVkOiB0cnVlLFxyXG4gICAgICAgIGd1ZXN0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBndWVzdF9pZDogZ3Vlc3RJZCxcclxuICAgICAgICAgICAgYXR0ZW5kaW5nOiBhdHRlbmRpbmcsXHJcbiAgICAgICAgICAgIG1lYWw6IG1lYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSkge1xyXG4gICAgICAvLyBZb3UgY2FuIGRvIGFueSB2YWxpZGF0aW9uIG9uIGhlcmUgZm9yIGVkaXRpbmcgdmFsdWUsXHJcbiAgICAgIC8vIHJldHVybiBmYWxzZSBmb3IgcmVqZWN0IHRoZSBlZGl0aW5nXHJcbiAgICAgIGlmIChjZWxsTmFtZSA9PSAnbWVhbCcpIHtcclxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9ICdCVVJHRVInICYmIGNlbGxWYWx1ZSAhPSAnQ0hJQ0tFTicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgbWVhbDogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjZWxsTmFtZSA9PSAnYXR0ZW5kaW5nJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ3RydWUnICYmIGNlbGxWYWx1ZSAhPSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJ5aW5nIHRvIGNoYW5nZSB0byBpbnZhbGlkIGF0dGVuZGluZzogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZWxsRWRpdFByb3AgPSB7XHJcbiAgICAgIG1vZGU6ICdjbGljaycsXHJcbiAgICAgIGJsdXJUb1NhdmU6IHRydWUsXHJcbiAgICAgIGJlZm9yZVNhdmVDZWxsOiBvbkJlZm9yZVNhdmVDZWxsLCAvLyBhIGhvb2sgZm9yIGJlZm9yZSBzYXZpbmcgY2VsbFxyXG4gICAgICBhZnRlclNhdmVDZWxsOiBvbkFmdGVyU2F2ZUNlbGwgIC8vIGEgaG9vayBmb3IgYWZ0ZXIgc2F2aW5nIGNlbGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJTdHlsZSA9IChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZDVkNSdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBteUNlbGxGb3JtYXR0ZXIoY2VsbCwgcm93KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15QXR0ZW5kaW5nQ2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICdubydcclxuICAgICAgaWYgKGNlbGwgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc3VsdCA9ICd5ZXMnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIENsaWNrIGEgZmllbGQgdG8gZWRpdC5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxCb290c3RyYXBUYWJsZSBkYXRhPXsgZ3Vlc3RzIH0gIGNlbGxFZGl0PXsgY2VsbEVkaXRQcm9wIH1cclxuICAgICAgICAgIHRhYmxlU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBoZWFkZXJTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGJvZHlTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIHN0cmlwZWQ9eyB0cnVlIH1cclxuICAgICAgICAgIGhvdmVyPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J2d1ZXN0J1xyXG4gICAgICAgICAgICAgIGlzS2V5PXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICBkYXRhQWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEd1ZXN0XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGhTdHlsZT17IHsgJ2ZvbnRXZWlnaHQnOiAnbGlnaHRlcicgfSB9XHJcbiAgICAgICAgICAgICAgZGF0YUZvcm1hdD17bXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyfT5cclxuICAgICAgICAgICAgICBBdHRlbmRpbmdcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdtZWFsJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGRTdHlsZT17IHsgJ2ZvbnRGYWNlJzogJ0FyaWFsJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIE1lYWxcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICA8L0Jvb3RzdHJhcFRhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
    }

    function myAttendingCellFormatter(cell, row) {
      let result = 'no';

      if (cell == true) {
        result = 'yes';
      }

      return __jsx("div", {
        className: "jsx-778162326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-778162326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, result), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "778162326",
        __self: this
      }, "p.jsx-778162326{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpzQixBQUlZLG9CQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZVN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRhYmxlLCBUYWJsZUhlYWRlckNvbHVtbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlJztcclxuXHJcbmNsYXNzIEludml0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbklkID0gY3R4LnF1ZXJ5Lmludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYGludml0YXRpb24gaWQ6ICR7aW52aXRhdGlvbklkfWApXHJcbiAgICBjb25zdCBteVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMvJyArIGludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYHVybDogJHtteVVybH1gKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW52aXRhdGlvbjogZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IHRoaXMucHJvcHMuaW52aXRhdGlvblxyXG4gICAgY29uc3QgZ3Vlc3RzID0gW11cclxuICAgIGlmIChpbnZpdGF0aW9uKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3Vlc3RFbGVtID0gaW52aXRhdGlvbi5ndWVzdHNbaV1cclxuICAgICAgICBndWVzdHMucHVzaCh7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uSWQ6IGludml0YXRpb24uaW52aXRhdGlvbl9pZCxcclxuICAgICAgICAgIGd1ZXN0SWQ6IGd1ZXN0RWxlbS5ndWVzdF9pZCxcclxuICAgICAgICAgIGd1ZXN0OiBndWVzdEVsZW0uZ3Vlc3RfbmFtZSxcclxuICAgICAgICAgIGF0dGVuZGluZzogZ3Vlc3RFbGVtLmF0dGVuZGluZyxcclxuICAgICAgICAgIG1lYWw6IGd1ZXN0RWxlbS5tZWFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4nbG9hZGluZy4uLic8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBnb3QgaW52aXRhdGlvbjogJHtpbnZpdGF0aW9uLmd1ZXN0c1swXS5hdHRlbmRpbmd9YClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnZpdGF0aW9uKGludml0YXRpb25VcGRhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkIGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25VcGRhdGVSZXNwb25zZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzcyB1cGRhdGluZyBpbnZpdGF0aW9uYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcyBjYWxsZWQgZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gY2hhbmdlIHRvIHRoZSBjZWxsLiBpIGRvbid0IGtub3cgaWYgdGhlcmUncyBhIHdheSB0byBnZXQgaG9va3MgaW50byB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIHJvdyBmcm9tIGhlcmUgKHRvIHRlbGwgaWYgdGhlcmUncyBhIGRpZmZlcmVuY2UpXHJcbiAgICBmdW5jdGlvbiBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1lYWwgPSByb3dbJ21lYWwnXVxyXG4gICAgICBjb25zdCBhdHRlbmRpbmcgPSByb3dbJ2F0dGVuZGluZyddXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25JZCA9IHJvd1snaW52aXRhdGlvbklkJ11cclxuICAgICAgY29uc3QgZ3Vlc3RJZCA9IHJvd1snZ3Vlc3RJZCddXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2lsbCBiZSBvbiBlYWNoIGNlbGwsIHNvIHdlIG9ubHkgbmVlZCB0byB3b3JyeSBhYm91dCBvbmUgZ3Vlc3QgYmVpbmcgdXBkYXRlZCBhdCBhIHRpbWUgKHNpbmNlIGVhY2ggZ3Vlc3QgaXMgYSByb3cgaW4gdGhlIHRhYmxlKVxyXG4gICAgICBsZXQgaW52aXRhdGlvblVwZGF0ZSA9IHtcclxuICAgICAgICBpbnZpdGF0aW9uX2lkOiBpbnZpdGF0aW9uSWQsXHJcbiAgICAgICAgcnN2cGVkOiB0cnVlLFxyXG4gICAgICAgIGd1ZXN0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBndWVzdF9pZDogZ3Vlc3RJZCxcclxuICAgICAgICAgICAgYXR0ZW5kaW5nOiBhdHRlbmRpbmcsXHJcbiAgICAgICAgICAgIG1lYWw6IG1lYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSkge1xyXG4gICAgICAvLyBZb3UgY2FuIGRvIGFueSB2YWxpZGF0aW9uIG9uIGhlcmUgZm9yIGVkaXRpbmcgdmFsdWUsXHJcbiAgICAgIC8vIHJldHVybiBmYWxzZSBmb3IgcmVqZWN0IHRoZSBlZGl0aW5nXHJcbiAgICAgIGlmIChjZWxsTmFtZSA9PSAnbWVhbCcpIHtcclxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9ICdCVVJHRVInICYmIGNlbGxWYWx1ZSAhPSAnQ0hJQ0tFTicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgbWVhbDogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjZWxsTmFtZSA9PSAnYXR0ZW5kaW5nJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ3RydWUnICYmIGNlbGxWYWx1ZSAhPSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJ5aW5nIHRvIGNoYW5nZSB0byBpbnZhbGlkIGF0dGVuZGluZzogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZWxsRWRpdFByb3AgPSB7XHJcbiAgICAgIG1vZGU6ICdjbGljaycsXHJcbiAgICAgIGJsdXJUb1NhdmU6IHRydWUsXHJcbiAgICAgIGJlZm9yZVNhdmVDZWxsOiBvbkJlZm9yZVNhdmVDZWxsLCAvLyBhIGhvb2sgZm9yIGJlZm9yZSBzYXZpbmcgY2VsbFxyXG4gICAgICBhZnRlclNhdmVDZWxsOiBvbkFmdGVyU2F2ZUNlbGwgIC8vIGEgaG9vayBmb3IgYWZ0ZXIgc2F2aW5nIGNlbGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJTdHlsZSA9IChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZDVkNSdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBteUNlbGxGb3JtYXR0ZXIoY2VsbCwgcm93KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15QXR0ZW5kaW5nQ2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICdubydcclxuICAgICAgaWYgKGNlbGwgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc3VsdCA9ICd5ZXMnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIENsaWNrIGEgZmllbGQgdG8gZWRpdC5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxCb290c3RyYXBUYWJsZSBkYXRhPXsgZ3Vlc3RzIH0gIGNlbGxFZGl0PXsgY2VsbEVkaXRQcm9wIH1cclxuICAgICAgICAgIHRhYmxlU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBoZWFkZXJTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGJvZHlTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIHN0cmlwZWQ9eyB0cnVlIH1cclxuICAgICAgICAgIGhvdmVyPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J2d1ZXN0J1xyXG4gICAgICAgICAgICAgIGlzS2V5PXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICBkYXRhQWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEd1ZXN0XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGhTdHlsZT17IHsgJ2ZvbnRXZWlnaHQnOiAnbGlnaHRlcicgfSB9XHJcbiAgICAgICAgICAgICAgZGF0YUZvcm1hdD17bXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyfT5cclxuICAgICAgICAgICAgICBBdHRlbmRpbmdcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdtZWFsJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGRTdHlsZT17IHsgJ2ZvbnRGYWNlJzogJ0FyaWFsJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIE1lYWxcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICA8L0Jvb3RzdHJhcFRhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
    }

    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("h3", {
      className: "jsx-3309349814",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Click a field to edit."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3309349814",
      __self: this
    }, "h3.jsx-3309349814{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtvQixBQUdpQyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcaW52aXRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVTdHlsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlU3R5bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7Qm9vdHN0cmFwVGFibGUsIFRhYmxlSGVhZGVyQ29sdW1ufSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUnO1xyXG5cclxuY2xhc3MgSW52aXRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uSWQgPSBjdHgucXVlcnkuaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiBpZDogJHtpbnZpdGF0aW9uSWR9YClcclxuICAgIGNvbnN0IG15VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucy8nICsgaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgdXJsOiAke215VXJsfWApXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG15VXJsKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbnZpdGF0aW9uOiBkYXRhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uID0gdGhpcy5wcm9wcy5pbnZpdGF0aW9uXHJcbiAgICBjb25zdCBndWVzdHMgPSBbXVxyXG4gICAgaWYgKGludml0YXRpb24pIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZpdGF0aW9uLmd1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBndWVzdEVsZW0gPSBpbnZpdGF0aW9uLmd1ZXN0c1tpXVxyXG4gICAgICAgIGd1ZXN0cy5wdXNoKHtcclxuICAgICAgICAgIGludml0YXRpb25JZDogaW52aXRhdGlvbi5pbnZpdGF0aW9uX2lkLFxyXG4gICAgICAgICAgZ3Vlc3RJZDogZ3Vlc3RFbGVtLmd1ZXN0X2lkLFxyXG4gICAgICAgICAgZ3Vlc3Q6IGd1ZXN0RWxlbS5ndWVzdF9uYW1lLFxyXG4gICAgICAgICAgYXR0ZW5kaW5nOiBndWVzdEVsZW0uYXR0ZW5kaW5nLFxyXG4gICAgICAgICAgbWVhbDogZ3Vlc3RFbGVtLm1lYWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWludml0YXRpb24pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2Pidsb2FkaW5nLi4uJzwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGdvdCBpbnZpdGF0aW9uOiAke2ludml0YXRpb24uZ3Vlc3RzWzBdLmF0dGVuZGluZ31gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgcmVjZWl2ZWQgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgY29uc3QgaW52aXRhdGlvblVwZGF0ZVJlc3BvbnNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzIHVwZGF0aW5nIGludml0YXRpb25gKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzIGNhbGxlZCBldmVuIHdoZW4gdGhlcmUncyBubyBjaGFuZ2UgdG8gdGhlIGNlbGwuIGkgZG9uJ3Qga25vdyBpZiB0aGVyZSdzIGEgd2F5IHRvIGdldCBob29rcyBpbnRvIHRoZSBwcmV2aW91cyBzdGF0ZSBvZiB0aGUgcm93IGZyb20gaGVyZSAodG8gdGVsbCBpZiB0aGVyZSdzIGEgZGlmZmVyZW5jZSlcclxuICAgIGZ1bmN0aW9uIG9uQWZ0ZXJTYXZlQ2VsbChyb3csIGNlbGxOYW1lLCBjZWxsVmFsdWUpIHtcclxuICAgICAgY29uc3QgbWVhbCA9IHJvd1snbWVhbCddXHJcbiAgICAgIGNvbnN0IGF0dGVuZGluZyA9IHJvd1snYXR0ZW5kaW5nJ11cclxuICAgICAgY29uc3QgaW52aXRhdGlvbklkID0gcm93WydpbnZpdGF0aW9uSWQnXVxyXG4gICAgICBjb25zdCBndWVzdElkID0gcm93WydndWVzdElkJ11cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB3aWxsIGJlIG9uIGVhY2ggY2VsbCwgc28gd2Ugb25seSBuZWVkIHRvIHdvcnJ5IGFib3V0IG9uZSBndWVzdCBiZWluZyB1cGRhdGVkIGF0IGEgdGltZSAoc2luY2UgZWFjaCBndWVzdCBpcyBhIHJvdyBpbiB0aGUgdGFibGUpXHJcbiAgICAgIGxldCBpbnZpdGF0aW9uVXBkYXRlID0ge1xyXG4gICAgICAgIGludml0YXRpb25faWQ6IGludml0YXRpb25JZCxcclxuICAgICAgICByc3ZwZWQ6IHRydWUsXHJcbiAgICAgICAgZ3Vlc3RzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGd1ZXN0X2lkOiBndWVzdElkLFxyXG4gICAgICAgICAgICBhdHRlbmRpbmc6IGF0dGVuZGluZyxcclxuICAgICAgICAgICAgbWVhbDogbWVhbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgdXBkYXRlSW52aXRhdGlvbihpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIC8vIFlvdSBjYW4gZG8gYW55IHZhbGlkYXRpb24gb24gaGVyZSBmb3IgZWRpdGluZyB2YWx1ZSxcclxuICAgICAgLy8gcmV0dXJuIGZhbHNlIGZvciByZWplY3QgdGhlIGVkaXRpbmdcclxuICAgICAgaWYgKGNlbGxOYW1lID09ICdtZWFsJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ0JVUkdFUicgJiYgY2VsbFZhbHVlICE9ICdDSElDS0VOJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYHRyeWluZyB0byBjaGFuZ2UgdG8gaW52YWxpZCBtZWFsOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNlbGxOYW1lID09ICdhdHRlbmRpbmcnKSB7XHJcbiAgICAgICAgaWYgKGNlbGxWYWx1ZSAhPSAndHJ1ZScgJiYgY2VsbFZhbHVlICE9ICdmYWxzZScpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgYXR0ZW5kaW5nOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNlbGxFZGl0UHJvcCA9IHtcclxuICAgICAgbW9kZTogJ2NsaWNrJyxcclxuICAgICAgYmx1clRvU2F2ZTogdHJ1ZSxcclxuICAgICAgYmVmb3JlU2F2ZUNlbGw6IG9uQmVmb3JlU2F2ZUNlbGwsIC8vIGEgaG9vayBmb3IgYmVmb3JlIHNhdmluZyBjZWxsXHJcbiAgICAgIGFmdGVyU2F2ZUNlbGw6IG9uQWZ0ZXJTYXZlQ2VsbCAgLy8gYSBob29rIGZvciBhZnRlciBzYXZpbmcgY2VsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0clN0eWxlID0gKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZkNWQ1J1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15Q2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtjZWxsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyKGNlbGwsIHJvdykge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gJ25vJ1xyXG4gICAgICBpZiAoY2VsbCA9PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gJ3llcydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgQ2xpY2sgYSBmaWVsZCB0byBlZGl0LlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPEJvb3RzdHJhcFRhYmxlIGRhdGE9eyBndWVzdHMgfSAgY2VsbEVkaXQ9eyBjZWxsRWRpdFByb3AgfVxyXG4gICAgICAgICAgdGFibGVTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGhlYWRlclN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgYm9keVN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgc3RyaXBlZD17IHRydWUgfVxyXG4gICAgICAgICAgaG92ZXI9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nZ3Vlc3QnXHJcbiAgICAgICAgICAgICAgaXNLZXk9eyB0cnVlIH1cclxuICAgICAgICAgICAgICB3aWR0aD0nMTAlJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGRhdGFGb3JtYXQ9e215Q2VsbEZvcm1hdHRlcn0+XHJcbiAgICAgICAgICAgICAgR3Vlc3RcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgZGF0YUFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICB0aFN0eWxlPXsgeyAnZm9udFdlaWdodCc6ICdsaWdodGVyJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUF0dGVuZGluZ0NlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEF0dGVuZGluZ1xyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J21lYWwnXHJcbiAgICAgICAgICAgICAgZGF0YUFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICB0ZFN0eWxlPXsgeyAnZm9udEZhY2UnOiAnQXJpYWwnIH0gfVxyXG4gICAgICAgICAgICAgIGRhdGFGb3JtYXQ9e215Q2VsbEZvcm1hdHRlcn0+XHJcbiAgICAgICAgICAgICAgTWVhbFxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgIDwvQm9vdHN0cmFwVGFibGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0YXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__["BootstrapTable"], {
      data: guests,
      cellEdit: cellEditProp,
      tableStyle: {
        border: 'black 1px solid'
      },
      headerStyle: {
        border: 'black 1px solid'
      },
      bodyStyle: {
        border: 'black 1px solid'
      },
      striped: true,
      hover: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__["TableHeaderColumn"], {
      dataField: "guest",
      isKey: true,
      width: "10%",
      dataAlign: "center",
      dataFormat: myCellFormatter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Guest"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__["TableHeaderColumn"], {
      dataField: "attending",
      dataAlign: "center",
      width: "10%",
      thStyle: {
        'fontWeight': 'lighter'
      },
      dataFormat: myAttendingCellFormatter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Attending"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_9__["TableHeaderColumn"], {
      dataField: "meal",
      dataAlign: "center",
      width: "10%",
      tdStyle: {
        'fontFace': 'Arial'
      },
      dataFormat: myCellFormatter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Meal")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Invitation);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/invitation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\josep\dev\wedding-ui\pages\invitation.js */"./pages/invitation.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap-table":
/*!****************************************!*\
  !*** external "react-bootstrap-table" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-table");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=invitation.js.map