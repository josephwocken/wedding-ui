webpackHotUpdate("static\\development\\pages\\guest_list.js",{

/***/ "./pages/guest_list.js":
/*!*****************************!*\
  !*** ./pages/guest_list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\pages\\guest_list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var GuestList = function GuestList(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1019962410",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Wedding Guests"), __jsx("ul", {
    className: "jsx-1019962410",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.guests.map(function (guest) {
    return __jsx("li", {
      key: guest.guest_id,
      className: "jsx-1019962410",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1019962410",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, guest.guest_name));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1019962410",
    __self: this
  }, "li.jsx-1019962410{font-family:'Arial';}h1.jsx-1019962410{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGd1ZXN0X2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBRzZCLEFBR0Esb0JBRnRCLEFBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcZ3Vlc3RfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuY29uc3QgR3Vlc3RMaXN0ID0gcHJvcHMgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+V2VkZGluZyBHdWVzdHM8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7cHJvcHMuZ3Vlc3RzLm1hcChndWVzdCA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17Z3Vlc3QuZ3Vlc3RfaWR9PlxyXG4gICAgICAgICAgPGE+e2d1ZXN0Lmd1ZXN0X25hbWV9PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbGkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuR3Vlc3RMaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvZ3Vlc3RzJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBHdWVzdCBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ3Vlc3RzOiBkYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEd1ZXN0TGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\guest_list.js */"));
};

GuestList.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:8080/guests'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          console.log("Guest data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            guests: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GuestList);

/***/ })

})
//# sourceMappingURL=guest_list.js.107d3aeb2ebf5eb7fc58.hot-update.js.map