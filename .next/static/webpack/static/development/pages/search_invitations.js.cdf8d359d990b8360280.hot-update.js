webpackHotUpdate("static\\development\\pages\\search_invitations.js",{

/***/ "./pages/search_invitations.js":
/*!*************************************!*\
  !*** ./pages/search_invitations.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInvitationsLayout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");







var _jsxFileName = "C:\\Users\\josep\\dev\\hello-next\\pages\\search_invitations.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var SearchInvitations =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchInvitations, _React$Component);

  function SearchInvitations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchInvitations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchInvitations).call(this, props));
    _this.state = {
      searchStringInput: '',
      matchingInvitations: null
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.searchInvitationsForGuest = _this.searchInvitationsForGuest.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchInvitations, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        searchStringInput: event.target.value.toUpperCase()
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var searchString = this.state.searchStringInput;
      console.log("Search String: ".concat(searchString));
      this.searchInvitationsForGuest(searchString);
      var matchingInvitations = this.state.matchingInvitations;
      console.log("Matching invitations: ".concat(matchingInvitations));
      event.preventDefault();
    } //TODO: broken - how to call async function from within react component?

  }, {
    key: "searchInvitationsForGuest",
    value: function searchInvitationsForGuest(searchString) {
      var _this2 = this;

      console.log("in search invitations function with input: ".concat(searchString));
      var requestBody = {
        'guest_search_string': "${searchString}"
      };
      console.log("request body: ".concat(requestBody));
      var invitationSearchResponse = fetch('http://localhost:8080/guest_invitations/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          'guest_search_string': _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(searchString)
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Success:', data);

        _this2.setState({
          'matchingInvitations': data
        });
      })["catch"](function (error) {
        console.error('Error:', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Name:", __jsx("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return SearchInvitations;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function SearchInvitationsLayout() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(SearchInvitations, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=search_invitations.js.cdf8d359d990b8360280.hot-update.js.map