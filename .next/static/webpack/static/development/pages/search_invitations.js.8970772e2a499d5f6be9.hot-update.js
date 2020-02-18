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
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\pages\\search_invitations.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var SearchInvitations =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SearchInvitations, _React$Component);

  function SearchInvitations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchInvitations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchInvitations).call(this, props));
    _this.state = {
      searchStringInput: '',
      matchingInvitations: [],
      error: false,
      isLoaded: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.searchInvitationsForGuest = _this.searchInvitationsForGuest.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchInvitations, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        searchStringInput: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var searchString = this.state.searchStringInput;
      console.log("Search String: ".concat(searchString));
      this.searchInvitationsForGuest(searchString);
      event.preventDefault();
    }
  }, {
    key: "searchInvitationsForGuest",
    value: function searchInvitationsForGuest(searchString) {
      var _this2 = this;

      console.log("in search invitations function with input: ".concat(searchString));
      var requestBody = {
        'guest_search_string': '' + searchString + ''
      };
      console.log("request body: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(requestBody)));
      var invitationSearchResponse = fetch('http://localhost:8080/guest_invitations/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(requestBody)
      }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Success:', data);

        _this2.setState({
          'matchingInvitations': data,
          'isLoaded': true,
          'error': false
        });
      })["catch"](function (error) {
        console.error('Error:', error);

        _this2.setState({
          'isLoaded': true,
          'error': true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          searchStringInput = _this$state.searchStringInput,
          matchingInvitations = _this$state.matchingInvitations,
          isLoaded = _this$state.isLoaded,
          error = _this$state.error;
      var invitationToGuestsMap = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a();

      if (matchingInvitations) {
        for (var i = 0; i < matchingInvitations.length; i++) {
          var invitation = matchingInvitations[i];
          console.log("invitation = ".concat(invitation));
          var guestsForInvitation = '';

          if (invitation && invitation.guests) {
            for (var j = 0; j < invitation.guests.length; j++) {
              guestsForInvitation += invitation.guests[j].guest_name;

              if (j != invitation.guests.length - 1) {
                guestsForInvitation += ', ';
              }
            }
          }

          invitationToGuestsMap[invitation.invitation_id] = guestsForInvitation;
        }
      } else {
        console.log("no matching invitations");
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3067857226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3067857226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-3067857226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Name:", __jsx("input", {
        type: "text",
        value: this.state.searchStringInput,
        onChange: this.handleChange,
        className: "jsx-3067857226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: "jsx-3067857226",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3067857226",
        __self: this
      }, "label.jsx-3067857226{font-family:'Arial';}input.jsx-3067857226{font-family:'Veranda';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXHNlYXJjaF9pbnZpdGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR3NCLEFBR21DLEFBR0Usb0JBRnhCLEVBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcc2VhcmNoX2ludml0YXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIFNlYXJjaEludml0YXRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoU3RyaW5nSW5wdXQ6ICcnLFxyXG4gICAgICBtYXRjaGluZ0ludml0YXRpb25zOiBbXSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBpc0xvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWFyY2hJbnZpdGF0aW9uc0Zvckd1ZXN0ID0gdGhpcy5zZWFyY2hJbnZpdGF0aW9uc0Zvckd1ZXN0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFN0cmluZ0lucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmdJbnB1dFxyXG4gICAgY29uc29sZS5sb2coYFNlYXJjaCBTdHJpbmc6ICR7c2VhcmNoU3RyaW5nfWApXHJcbiAgICB0aGlzLnNlYXJjaEludml0YXRpb25zRm9yR3Vlc3Qoc2VhcmNoU3RyaW5nKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gc2VhcmNoSW52aXRhdGlvbnNGb3JHdWVzdChzZWFyY2hTdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGBpbiBzZWFyY2ggaW52aXRhdGlvbnMgZnVuY3Rpb24gd2l0aCBpbnB1dDogJHtzZWFyY2hTdHJpbmd9YClcclxuICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgJ2d1ZXN0X3NlYXJjaF9zdHJpbmcnOiAnJyArIHNlYXJjaFN0cmluZyArICcnXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgcmVxdWVzdCBib2R5OiAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KX1gKVxyXG4gICAgY29uc3QgaW52aXRhdGlvblNlYXJjaFJlc3BvbnNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ndWVzdF9pbnZpdGF0aW9ucy9zZWFyY2gnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KVxyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgJ21hdGNoaW5nSW52aXRhdGlvbnMnOiBkYXRhLFxyXG4gICAgICAgICdpc0xvYWRlZCc6IHRydWUsXHJcbiAgICAgICAgJ2Vycm9yJzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgJ2lzTG9hZGVkJzogdHJ1ZSxcclxuICAgICAgICAnZXJyb3InOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlYXJjaFN0cmluZ0lucHV0LCBtYXRjaGluZ0ludml0YXRpb25zLCBpc0xvYWRlZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICB2YXIgaW52aXRhdGlvblRvR3Vlc3RzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBpZiAobWF0Y2hpbmdJbnZpdGF0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nSW52aXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaW52aXRhdGlvbiA9IG1hdGNoaW5nSW52aXRhdGlvbnNbaV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiA9ICR7aW52aXRhdGlvbn1gKVxyXG4gICAgICAgIHZhciBndWVzdHNGb3JJbnZpdGF0aW9uID0gJydcclxuICAgICAgICBpZiAoaW52aXRhdGlvbiAmJiBpbnZpdGF0aW9uLmd1ZXN0cykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbnZpdGF0aW9uLmd1ZXN0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBndWVzdHNGb3JJbnZpdGF0aW9uICs9IGludml0YXRpb24uZ3Vlc3RzW2pdLmd1ZXN0X25hbWVcclxuICAgICAgICAgICAgaWYgKGogIT0gaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgIGd1ZXN0c0Zvckludml0YXRpb24gKz0gJywgJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludml0YXRpb25Ub0d1ZXN0c01hcFtpbnZpdGF0aW9uLmludml0YXRpb25faWRdID0gZ3Vlc3RzRm9ySW52aXRhdGlvblxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhgbm8gbWF0Y2hpbmcgaW52aXRhdGlvbnNgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmdJbnB1dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ZlcmFuZGEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkludml0YXRpb24gSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkd1ZXN0KHMpPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge21hdGNoaW5nSW52aXRhdGlvbnMubWFwKGludml0YXRpb24gPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2ludml0YXRpb24uaW52aXRhdGlvbl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9pbnZpdGF0aW9uXCIsIHF1ZXJ5OiB7IGludml0YXRpb25JZDogaW52aXRhdGlvbi5pbnZpdGF0aW9uX2lkfX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e2ludml0YXRpb24uaW52aXRhdGlvbl9pZH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2ludml0YXRpb25Ub0d1ZXN0c01hcFtpbnZpdGF0aW9uLmludml0YXRpb25faWRdfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hJbnZpdGF0aW9uc0xheW91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxTZWFyY2hJbnZpdGF0aW9ucy8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\search_invitations.js */")), __jsx("div", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), __jsx("table", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("thead", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("th", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Invitation ID"), __jsx("th", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Guest(s)"))), __jsx("tbody", {
        className: "jsx-3212277030",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, matchingInvitations.map(function (invitation) {
        return __jsx("tr", {
          key: invitation.invitation_id,
          className: "jsx-3212277030",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-3212277030",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: {
            pathname: "/invitation",
            query: {
              invitationId: invitation.invitation_id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-3212277030",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, invitation.invitation_id))), __jsx("td", {
          className: "jsx-3212277030",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, invitationToGuestsMap[invitation.invitation_id]));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3212277030",
        __self: this
      }, "th.jsx-3212277030{font-family:'Arial';}td.jsx-3212277030{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXHNlYXJjaF9pbnZpdGF0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySXNCLEFBR21DLEFBR0Esb0JBRnRCLEFBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcc2VhcmNoX2ludml0YXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIFNlYXJjaEludml0YXRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoU3RyaW5nSW5wdXQ6ICcnLFxyXG4gICAgICBtYXRjaGluZ0ludml0YXRpb25zOiBbXSxcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBpc0xvYWRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWFyY2hJbnZpdGF0aW9uc0Zvckd1ZXN0ID0gdGhpcy5zZWFyY2hJbnZpdGF0aW9uc0Zvckd1ZXN0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFN0cmluZ0lucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmdJbnB1dFxyXG4gICAgY29uc29sZS5sb2coYFNlYXJjaCBTdHJpbmc6ICR7c2VhcmNoU3RyaW5nfWApXHJcbiAgICB0aGlzLnNlYXJjaEludml0YXRpb25zRm9yR3Vlc3Qoc2VhcmNoU3RyaW5nKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gc2VhcmNoSW52aXRhdGlvbnNGb3JHdWVzdChzZWFyY2hTdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGBpbiBzZWFyY2ggaW52aXRhdGlvbnMgZnVuY3Rpb24gd2l0aCBpbnB1dDogJHtzZWFyY2hTdHJpbmd9YClcclxuICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgJ2d1ZXN0X3NlYXJjaF9zdHJpbmcnOiAnJyArIHNlYXJjaFN0cmluZyArICcnXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgcmVxdWVzdCBib2R5OiAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KX1gKVxyXG4gICAgY29uc3QgaW52aXRhdGlvblNlYXJjaFJlc3BvbnNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ndWVzdF9pbnZpdGF0aW9ucy9zZWFyY2gnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KVxyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgJ21hdGNoaW5nSW52aXRhdGlvbnMnOiBkYXRhLFxyXG4gICAgICAgICdpc0xvYWRlZCc6IHRydWUsXHJcbiAgICAgICAgJ2Vycm9yJzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgJ2lzTG9hZGVkJzogdHJ1ZSxcclxuICAgICAgICAnZXJyb3InOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlYXJjaFN0cmluZ0lucHV0LCBtYXRjaGluZ0ludml0YXRpb25zLCBpc0xvYWRlZCwgZXJyb3IgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICB2YXIgaW52aXRhdGlvblRvR3Vlc3RzTWFwID0gbmV3IE1hcCgpXHJcbiAgICBpZiAobWF0Y2hpbmdJbnZpdGF0aW9ucykge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nSW52aXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaW52aXRhdGlvbiA9IG1hdGNoaW5nSW52aXRhdGlvbnNbaV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiA9ICR7aW52aXRhdGlvbn1gKVxyXG4gICAgICAgIHZhciBndWVzdHNGb3JJbnZpdGF0aW9uID0gJydcclxuICAgICAgICBpZiAoaW52aXRhdGlvbiAmJiBpbnZpdGF0aW9uLmd1ZXN0cykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbnZpdGF0aW9uLmd1ZXN0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBndWVzdHNGb3JJbnZpdGF0aW9uICs9IGludml0YXRpb24uZ3Vlc3RzW2pdLmd1ZXN0X25hbWVcclxuICAgICAgICAgICAgaWYgKGogIT0gaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgIGd1ZXN0c0Zvckludml0YXRpb24gKz0gJywgJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludml0YXRpb25Ub0d1ZXN0c01hcFtpbnZpdGF0aW9uLmludml0YXRpb25faWRdID0gZ3Vlc3RzRm9ySW52aXRhdGlvblxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhgbm8gbWF0Y2hpbmcgaW52aXRhdGlvbnNgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmdJbnB1dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1ZlcmFuZGEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkludml0YXRpb24gSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkd1ZXN0KHMpPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge21hdGNoaW5nSW52aXRhdGlvbnMubWFwKGludml0YXRpb24gPT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2ludml0YXRpb24uaW52aXRhdGlvbl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIi9pbnZpdGF0aW9uXCIsIHF1ZXJ5OiB7IGludml0YXRpb25JZDogaW52aXRhdGlvbi5pbnZpdGF0aW9uX2lkfX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+e2ludml0YXRpb24uaW52aXRhdGlvbl9pZH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2ludml0YXRpb25Ub0d1ZXN0c01hcFtpbnZpdGF0aW9uLmludml0YXRpb25faWRdfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hJbnZpdGF0aW9uc0xheW91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxTZWFyY2hJbnZpdGF0aW9ucy8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\search_invitations.js */")));
    }
  }]);

  return SearchInvitations;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

function SearchInvitationsLayout() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(SearchInvitations, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=search_invitations.js.8970772e2a499d5f6be9.hot-update.js.map