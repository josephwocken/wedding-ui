webpackHotUpdate("static\\development\\pages\\invitation.js",{

/***/ "./pages/invitation.js":
/*!*****************************!*\
  !*** ./pages/invitation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_TableStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/TableStyle */ "./components/TableStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\pages\\invitation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var Invitation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Invitation, _React$Component);

  function Invitation(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Invitation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Invitation).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Invitation, [{
    key: "render",
    value: function render() {
      var invitation = this.props.invitation;
      var guests = [];

      if (invitation) {
        for (var i = 0; i < invitation.guests.length; i++) {
          var guestElem = invitation.guests[i];
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
        console.log("got invitation: ".concat(invitation.guests[0].attending));
      }

      function updateInvitation(invitationUpdate) {
        console.log("received invitation update: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(invitationUpdate)));
        var invitationUpdateResponse = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()('http://localhost:8080/invitations', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(invitationUpdate)
        }).then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          } else {
            console.log("success updating invitation");
          }

          return response;
        })["catch"](function (error) {
          console.error('Error:', error);
        });
      } // is called even when there's no change to the cell. i don't know if there's a way to get hooks into the previous state of the row from here (to tell if there's a difference)


      function onAfterSaveCell(row, cellName, cellValue) {
        var meal = row['meal'];
        var attending = row['attending'];
        var invitationId = row['invitationId'];
        var guestId = row['guestId']; // update will be on each cell, so we only need to worry about one guest being updated at a time (since each guest is a row in the table)

        var invitationUpdate = {
          invitation_id: invitationId,
          rsvped: true,
          guests: [{
            guest_id: guestId,
            attending: attending,
            meal: meal
          }]
        };
        console.log("invitation update: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(invitationUpdate)));
        updateInvitation(invitationUpdate);
      }

      function onBeforeSaveCell(row, cellName, cellValue) {
        // You can do any validation on here for editing value,
        // return false for reject the editing
        if (cellName == 'meal') {
          if (cellValue != 'BURGER' && cellValue != 'CHICKEN') {
            console.log("trying to change to invalid meal: ".concat(cellValue));
            return false;
          }
        } else if (cellName == 'attending') {
          if (cellValue != 'true' && cellValue != 'false') {
            console.log("trying to change to invalid attending: ".concat(cellValue));
            return false;
          }
        }

        return true;
      }

      var cellEditProp = {
        mode: 'click',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell,
        // a hook for before saving cell
        afterSaveCell: onAfterSaveCell // a hook for after saving cell

      };

      var trStyle = function trStyle(row, rowIndex) {
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
        }, cell), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "778162326",
          __self: this
        }, "p.jsx-778162326{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lzQixBQUlZLG9CQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZVN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRhYmxlLCBUYWJsZUhlYWRlckNvbHVtbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlJztcclxuXHJcbmNsYXNzIEludml0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbklkID0gY3R4LnF1ZXJ5Lmludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYGludml0YXRpb24gaWQ6ICR7aW52aXRhdGlvbklkfWApXHJcbiAgICBjb25zdCBteVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMvJyArIGludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYHVybDogJHtteVVybH1gKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW52aXRhdGlvbjogZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IHRoaXMucHJvcHMuaW52aXRhdGlvblxyXG4gICAgY29uc3QgZ3Vlc3RzID0gW11cclxuICAgIGlmIChpbnZpdGF0aW9uKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3Vlc3RFbGVtID0gaW52aXRhdGlvbi5ndWVzdHNbaV1cclxuICAgICAgICBndWVzdHMucHVzaCh7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uSWQ6IGludml0YXRpb24uaW52aXRhdGlvbl9pZCxcclxuICAgICAgICAgIGd1ZXN0SWQ6IGd1ZXN0RWxlbS5ndWVzdF9pZCxcclxuICAgICAgICAgIGd1ZXN0OiBndWVzdEVsZW0uZ3Vlc3RfbmFtZSxcclxuICAgICAgICAgIGF0dGVuZGluZzogZ3Vlc3RFbGVtLmF0dGVuZGluZyxcclxuICAgICAgICAgIG1lYWw6IGd1ZXN0RWxlbS5tZWFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4nbG9hZGluZy4uLic8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBnb3QgaW52aXRhdGlvbjogJHtpbnZpdGF0aW9uLmd1ZXN0c1swXS5hdHRlbmRpbmd9YClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnZpdGF0aW9uKGludml0YXRpb25VcGRhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkIGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25VcGRhdGVSZXNwb25zZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzcyB1cGRhdGluZyBpbnZpdGF0aW9uYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcyBjYWxsZWQgZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gY2hhbmdlIHRvIHRoZSBjZWxsLiBpIGRvbid0IGtub3cgaWYgdGhlcmUncyBhIHdheSB0byBnZXQgaG9va3MgaW50byB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIHJvdyBmcm9tIGhlcmUgKHRvIHRlbGwgaWYgdGhlcmUncyBhIGRpZmZlcmVuY2UpXHJcbiAgICBmdW5jdGlvbiBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1lYWwgPSByb3dbJ21lYWwnXVxyXG4gICAgICBjb25zdCBhdHRlbmRpbmcgPSByb3dbJ2F0dGVuZGluZyddXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25JZCA9IHJvd1snaW52aXRhdGlvbklkJ11cclxuICAgICAgY29uc3QgZ3Vlc3RJZCA9IHJvd1snZ3Vlc3RJZCddXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2lsbCBiZSBvbiBlYWNoIGNlbGwsIHNvIHdlIG9ubHkgbmVlZCB0byB3b3JyeSBhYm91dCBvbmUgZ3Vlc3QgYmVpbmcgdXBkYXRlZCBhdCBhIHRpbWUgKHNpbmNlIGVhY2ggZ3Vlc3QgaXMgYSByb3cgaW4gdGhlIHRhYmxlKVxyXG4gICAgICBsZXQgaW52aXRhdGlvblVwZGF0ZSA9IHtcclxuICAgICAgICBpbnZpdGF0aW9uX2lkOiBpbnZpdGF0aW9uSWQsXHJcbiAgICAgICAgcnN2cGVkOiB0cnVlLFxyXG4gICAgICAgIGd1ZXN0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBndWVzdF9pZDogZ3Vlc3RJZCxcclxuICAgICAgICAgICAgYXR0ZW5kaW5nOiBhdHRlbmRpbmcsXHJcbiAgICAgICAgICAgIG1lYWw6IG1lYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSkge1xyXG4gICAgICAvLyBZb3UgY2FuIGRvIGFueSB2YWxpZGF0aW9uIG9uIGhlcmUgZm9yIGVkaXRpbmcgdmFsdWUsXHJcbiAgICAgIC8vIHJldHVybiBmYWxzZSBmb3IgcmVqZWN0IHRoZSBlZGl0aW5nXHJcbiAgICAgIGlmIChjZWxsTmFtZSA9PSAnbWVhbCcpIHtcclxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9ICdCVVJHRVInICYmIGNlbGxWYWx1ZSAhPSAnQ0hJQ0tFTicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgbWVhbDogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjZWxsTmFtZSA9PSAnYXR0ZW5kaW5nJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ3RydWUnICYmIGNlbGxWYWx1ZSAhPSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJ5aW5nIHRvIGNoYW5nZSB0byBpbnZhbGlkIGF0dGVuZGluZzogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZWxsRWRpdFByb3AgPSB7XHJcbiAgICAgIG1vZGU6ICdjbGljaycsXHJcbiAgICAgIGJsdXJUb1NhdmU6IHRydWUsXHJcbiAgICAgIGJlZm9yZVNhdmVDZWxsOiBvbkJlZm9yZVNhdmVDZWxsLCAvLyBhIGhvb2sgZm9yIGJlZm9yZSBzYXZpbmcgY2VsbFxyXG4gICAgICBhZnRlclNhdmVDZWxsOiBvbkFmdGVyU2F2ZUNlbGwgIC8vIGEgaG9vayBmb3IgYWZ0ZXIgc2F2aW5nIGNlbGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJTdHlsZSA9IChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZDVkNSdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBteUNlbGxGb3JtYXR0ZXIoY2VsbCwgcm93KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15QXR0ZW5kaW5nQ2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICdubydcclxuICAgICAgaWYgKGNlbGwgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc3VsdCA9ICd5ZXMnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIENsaWNrIGEgZmllbGQgdG8gZWRpdC5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxCb290c3RyYXBUYWJsZSBkYXRhPXsgZ3Vlc3RzIH0gIGNlbGxFZGl0PXsgY2VsbEVkaXRQcm9wIH1cclxuICAgICAgICAgIHRhYmxlU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBoZWFkZXJTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGJvZHlTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIHN0cmlwZWQ9eyB0cnVlIH1cclxuICAgICAgICAgIGhvdmVyPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J2d1ZXN0J1xyXG4gICAgICAgICAgICAgIGlzS2V5PXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICBkYXRhQWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEd1ZXN0XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGhTdHlsZT17IHsgJ2ZvbnRXZWlnaHQnOiAnbGlnaHRlcicgfSB9XHJcbiAgICAgICAgICAgICAgZGF0YUZvcm1hdD17bXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyfT5cclxuICAgICAgICAgICAgICBBdHRlbmRpbmdcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdtZWFsJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGRTdHlsZT17IHsgJ2ZvbnRGYWNlJzogJ0FyaWFsJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIE1lYWxcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICA8L0Jvb3RzdHJhcFRhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
      }

      function myAttendingCellFormatter(cell, row) {
        var result = 'no';

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
        }, result), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "778162326",
          __self: this
        }, "p.jsx-778162326{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpzQixBQUlZLG9CQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZVN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRhYmxlLCBUYWJsZUhlYWRlckNvbHVtbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlJztcclxuXHJcbmNsYXNzIEludml0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbklkID0gY3R4LnF1ZXJ5Lmludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYGludml0YXRpb24gaWQ6ICR7aW52aXRhdGlvbklkfWApXHJcbiAgICBjb25zdCBteVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMvJyArIGludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYHVybDogJHtteVVybH1gKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW52aXRhdGlvbjogZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IHRoaXMucHJvcHMuaW52aXRhdGlvblxyXG4gICAgY29uc3QgZ3Vlc3RzID0gW11cclxuICAgIGlmIChpbnZpdGF0aW9uKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3Vlc3RFbGVtID0gaW52aXRhdGlvbi5ndWVzdHNbaV1cclxuICAgICAgICBndWVzdHMucHVzaCh7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uSWQ6IGludml0YXRpb24uaW52aXRhdGlvbl9pZCxcclxuICAgICAgICAgIGd1ZXN0SWQ6IGd1ZXN0RWxlbS5ndWVzdF9pZCxcclxuICAgICAgICAgIGd1ZXN0OiBndWVzdEVsZW0uZ3Vlc3RfbmFtZSxcclxuICAgICAgICAgIGF0dGVuZGluZzogZ3Vlc3RFbGVtLmF0dGVuZGluZyxcclxuICAgICAgICAgIG1lYWw6IGd1ZXN0RWxlbS5tZWFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4nbG9hZGluZy4uLic8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBnb3QgaW52aXRhdGlvbjogJHtpbnZpdGF0aW9uLmd1ZXN0c1swXS5hdHRlbmRpbmd9YClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnZpdGF0aW9uKGludml0YXRpb25VcGRhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkIGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25VcGRhdGVSZXNwb25zZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzcyB1cGRhdGluZyBpbnZpdGF0aW9uYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcyBjYWxsZWQgZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gY2hhbmdlIHRvIHRoZSBjZWxsLiBpIGRvbid0IGtub3cgaWYgdGhlcmUncyBhIHdheSB0byBnZXQgaG9va3MgaW50byB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIHJvdyBmcm9tIGhlcmUgKHRvIHRlbGwgaWYgdGhlcmUncyBhIGRpZmZlcmVuY2UpXHJcbiAgICBmdW5jdGlvbiBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1lYWwgPSByb3dbJ21lYWwnXVxyXG4gICAgICBjb25zdCBhdHRlbmRpbmcgPSByb3dbJ2F0dGVuZGluZyddXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25JZCA9IHJvd1snaW52aXRhdGlvbklkJ11cclxuICAgICAgY29uc3QgZ3Vlc3RJZCA9IHJvd1snZ3Vlc3RJZCddXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2lsbCBiZSBvbiBlYWNoIGNlbGwsIHNvIHdlIG9ubHkgbmVlZCB0byB3b3JyeSBhYm91dCBvbmUgZ3Vlc3QgYmVpbmcgdXBkYXRlZCBhdCBhIHRpbWUgKHNpbmNlIGVhY2ggZ3Vlc3QgaXMgYSByb3cgaW4gdGhlIHRhYmxlKVxyXG4gICAgICBsZXQgaW52aXRhdGlvblVwZGF0ZSA9IHtcclxuICAgICAgICBpbnZpdGF0aW9uX2lkOiBpbnZpdGF0aW9uSWQsXHJcbiAgICAgICAgcnN2cGVkOiB0cnVlLFxyXG4gICAgICAgIGd1ZXN0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBndWVzdF9pZDogZ3Vlc3RJZCxcclxuICAgICAgICAgICAgYXR0ZW5kaW5nOiBhdHRlbmRpbmcsXHJcbiAgICAgICAgICAgIG1lYWw6IG1lYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSkge1xyXG4gICAgICAvLyBZb3UgY2FuIGRvIGFueSB2YWxpZGF0aW9uIG9uIGhlcmUgZm9yIGVkaXRpbmcgdmFsdWUsXHJcbiAgICAgIC8vIHJldHVybiBmYWxzZSBmb3IgcmVqZWN0IHRoZSBlZGl0aW5nXHJcbiAgICAgIGlmIChjZWxsTmFtZSA9PSAnbWVhbCcpIHtcclxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9ICdCVVJHRVInICYmIGNlbGxWYWx1ZSAhPSAnQ0hJQ0tFTicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgbWVhbDogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjZWxsTmFtZSA9PSAnYXR0ZW5kaW5nJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ3RydWUnICYmIGNlbGxWYWx1ZSAhPSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJ5aW5nIHRvIGNoYW5nZSB0byBpbnZhbGlkIGF0dGVuZGluZzogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZWxsRWRpdFByb3AgPSB7XHJcbiAgICAgIG1vZGU6ICdjbGljaycsXHJcbiAgICAgIGJsdXJUb1NhdmU6IHRydWUsXHJcbiAgICAgIGJlZm9yZVNhdmVDZWxsOiBvbkJlZm9yZVNhdmVDZWxsLCAvLyBhIGhvb2sgZm9yIGJlZm9yZSBzYXZpbmcgY2VsbFxyXG4gICAgICBhZnRlclNhdmVDZWxsOiBvbkFmdGVyU2F2ZUNlbGwgIC8vIGEgaG9vayBmb3IgYWZ0ZXIgc2F2aW5nIGNlbGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJTdHlsZSA9IChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZDVkNSdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBteUNlbGxGb3JtYXR0ZXIoY2VsbCwgcm93KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15QXR0ZW5kaW5nQ2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICdubydcclxuICAgICAgaWYgKGNlbGwgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc3VsdCA9ICd5ZXMnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIENsaWNrIGEgZmllbGQgdG8gZWRpdC5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxCb290c3RyYXBUYWJsZSBkYXRhPXsgZ3Vlc3RzIH0gIGNlbGxFZGl0PXsgY2VsbEVkaXRQcm9wIH1cclxuICAgICAgICAgIHRhYmxlU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBoZWFkZXJTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGJvZHlTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIHN0cmlwZWQ9eyB0cnVlIH1cclxuICAgICAgICAgIGhvdmVyPXsgdHJ1ZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J2d1ZXN0J1xyXG4gICAgICAgICAgICAgIGlzS2V5PXsgdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICBkYXRhQWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEd1ZXN0XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nYXR0ZW5kaW5nJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGhTdHlsZT17IHsgJ2ZvbnRXZWlnaHQnOiAnbGlnaHRlcicgfSB9XHJcbiAgICAgICAgICAgICAgZGF0YUZvcm1hdD17bXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyfT5cclxuICAgICAgICAgICAgICBBdHRlbmRpbmdcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdtZWFsJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPScxMCUnXHJcbiAgICAgICAgICAgICAgdGRTdHlsZT17IHsgJ2ZvbnRGYWNlJzogJ0FyaWFsJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUNlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIE1lYWxcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICA8L0Jvb3RzdHJhcFRhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
      }

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, "Click a field to edit."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3309349814",
        __self: this
      }, "h3.jsx-3309349814{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUtvQixBQUdpQyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcaW52aXRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVTdHlsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlU3R5bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7Qm9vdHN0cmFwVGFibGUsIFRhYmxlSGVhZGVyQ29sdW1ufSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUnO1xyXG5cclxuY2xhc3MgSW52aXRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uSWQgPSBjdHgucXVlcnkuaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiBpZDogJHtpbnZpdGF0aW9uSWR9YClcclxuICAgIGNvbnN0IG15VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucy8nICsgaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgdXJsOiAke215VXJsfWApXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG15VXJsKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbnZpdGF0aW9uOiBkYXRhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uID0gdGhpcy5wcm9wcy5pbnZpdGF0aW9uXHJcbiAgICBjb25zdCBndWVzdHMgPSBbXVxyXG4gICAgaWYgKGludml0YXRpb24pIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZpdGF0aW9uLmd1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBndWVzdEVsZW0gPSBpbnZpdGF0aW9uLmd1ZXN0c1tpXVxyXG4gICAgICAgIGd1ZXN0cy5wdXNoKHtcclxuICAgICAgICAgIGludml0YXRpb25JZDogaW52aXRhdGlvbi5pbnZpdGF0aW9uX2lkLFxyXG4gICAgICAgICAgZ3Vlc3RJZDogZ3Vlc3RFbGVtLmd1ZXN0X2lkLFxyXG4gICAgICAgICAgZ3Vlc3Q6IGd1ZXN0RWxlbS5ndWVzdF9uYW1lLFxyXG4gICAgICAgICAgYXR0ZW5kaW5nOiBndWVzdEVsZW0uYXR0ZW5kaW5nLFxyXG4gICAgICAgICAgbWVhbDogZ3Vlc3RFbGVtLm1lYWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWludml0YXRpb24pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2Pidsb2FkaW5nLi4uJzwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGdvdCBpbnZpdGF0aW9uOiAke2ludml0YXRpb24uZ3Vlc3RzWzBdLmF0dGVuZGluZ31gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgcmVjZWl2ZWQgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgY29uc3QgaW52aXRhdGlvblVwZGF0ZVJlc3BvbnNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzIHVwZGF0aW5nIGludml0YXRpb25gKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzIGNhbGxlZCBldmVuIHdoZW4gdGhlcmUncyBubyBjaGFuZ2UgdG8gdGhlIGNlbGwuIGkgZG9uJ3Qga25vdyBpZiB0aGVyZSdzIGEgd2F5IHRvIGdldCBob29rcyBpbnRvIHRoZSBwcmV2aW91cyBzdGF0ZSBvZiB0aGUgcm93IGZyb20gaGVyZSAodG8gdGVsbCBpZiB0aGVyZSdzIGEgZGlmZmVyZW5jZSlcclxuICAgIGZ1bmN0aW9uIG9uQWZ0ZXJTYXZlQ2VsbChyb3csIGNlbGxOYW1lLCBjZWxsVmFsdWUpIHtcclxuICAgICAgY29uc3QgbWVhbCA9IHJvd1snbWVhbCddXHJcbiAgICAgIGNvbnN0IGF0dGVuZGluZyA9IHJvd1snYXR0ZW5kaW5nJ11cclxuICAgICAgY29uc3QgaW52aXRhdGlvbklkID0gcm93WydpbnZpdGF0aW9uSWQnXVxyXG4gICAgICBjb25zdCBndWVzdElkID0gcm93WydndWVzdElkJ11cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB3aWxsIGJlIG9uIGVhY2ggY2VsbCwgc28gd2Ugb25seSBuZWVkIHRvIHdvcnJ5IGFib3V0IG9uZSBndWVzdCBiZWluZyB1cGRhdGVkIGF0IGEgdGltZSAoc2luY2UgZWFjaCBndWVzdCBpcyBhIHJvdyBpbiB0aGUgdGFibGUpXHJcbiAgICAgIGxldCBpbnZpdGF0aW9uVXBkYXRlID0ge1xyXG4gICAgICAgIGludml0YXRpb25faWQ6IGludml0YXRpb25JZCxcclxuICAgICAgICByc3ZwZWQ6IHRydWUsXHJcbiAgICAgICAgZ3Vlc3RzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGd1ZXN0X2lkOiBndWVzdElkLFxyXG4gICAgICAgICAgICBhdHRlbmRpbmc6IGF0dGVuZGluZyxcclxuICAgICAgICAgICAgbWVhbDogbWVhbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgdXBkYXRlSW52aXRhdGlvbihpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIC8vIFlvdSBjYW4gZG8gYW55IHZhbGlkYXRpb24gb24gaGVyZSBmb3IgZWRpdGluZyB2YWx1ZSxcclxuICAgICAgLy8gcmV0dXJuIGZhbHNlIGZvciByZWplY3QgdGhlIGVkaXRpbmdcclxuICAgICAgaWYgKGNlbGxOYW1lID09ICdtZWFsJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ0JVUkdFUicgJiYgY2VsbFZhbHVlICE9ICdDSElDS0VOJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYHRyeWluZyB0byBjaGFuZ2UgdG8gaW52YWxpZCBtZWFsOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNlbGxOYW1lID09ICdhdHRlbmRpbmcnKSB7XHJcbiAgICAgICAgaWYgKGNlbGxWYWx1ZSAhPSAndHJ1ZScgJiYgY2VsbFZhbHVlICE9ICdmYWxzZScpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgYXR0ZW5kaW5nOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNlbGxFZGl0UHJvcCA9IHtcclxuICAgICAgbW9kZTogJ2NsaWNrJyxcclxuICAgICAgYmx1clRvU2F2ZTogdHJ1ZSxcclxuICAgICAgYmVmb3JlU2F2ZUNlbGw6IG9uQmVmb3JlU2F2ZUNlbGwsIC8vIGEgaG9vayBmb3IgYmVmb3JlIHNhdmluZyBjZWxsXHJcbiAgICAgIGFmdGVyU2F2ZUNlbGw6IG9uQWZ0ZXJTYXZlQ2VsbCAgLy8gYSBob29rIGZvciBhZnRlciBzYXZpbmcgY2VsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0clN0eWxlID0gKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZkNWQ1J1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG15Q2VsbEZvcm1hdHRlcihjZWxsLCByb3cpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtjZWxsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXlBdHRlbmRpbmdDZWxsRm9ybWF0dGVyKGNlbGwsIHJvdykge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gJ25vJ1xyXG4gICAgICBpZiAoY2VsbCA9PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gJ3llcydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgQ2xpY2sgYSBmaWVsZCB0byBlZGl0LlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPEJvb3RzdHJhcFRhYmxlIGRhdGE9eyBndWVzdHMgfSAgY2VsbEVkaXQ9eyBjZWxsRWRpdFByb3AgfVxyXG4gICAgICAgICAgdGFibGVTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGhlYWRlclN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgYm9keVN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgc3RyaXBlZD17IHRydWUgfVxyXG4gICAgICAgICAgaG92ZXI9eyB0cnVlIH0+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxyXG4gICAgICAgICAgICAgIGRhdGFGaWVsZD0nZ3Vlc3QnXHJcbiAgICAgICAgICAgICAgaXNLZXk9eyB0cnVlIH1cclxuICAgICAgICAgICAgICB3aWR0aD0nMTAlJ1xyXG4gICAgICAgICAgICAgIGRhdGFBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGRhdGFGb3JtYXQ9e215Q2VsbEZvcm1hdHRlcn0+XHJcbiAgICAgICAgICAgICAgR3Vlc3RcclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXHJcbiAgICAgICAgICAgICAgZGF0YUZpZWxkPSdhdHRlbmRpbmcnXHJcbiAgICAgICAgICAgICAgZGF0YUFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICB0aFN0eWxlPXsgeyAnZm9udFdlaWdodCc6ICdsaWdodGVyJyB9IH1cclxuICAgICAgICAgICAgICBkYXRhRm9ybWF0PXtteUF0dGVuZGluZ0NlbGxGb3JtYXR0ZXJ9PlxyXG4gICAgICAgICAgICAgIEF0dGVuZGluZ1xyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW5cclxuICAgICAgICAgICAgICBkYXRhRmllbGQ9J21lYWwnXHJcbiAgICAgICAgICAgICAgZGF0YUFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgd2lkdGg9JzEwJSdcclxuICAgICAgICAgICAgICB0ZFN0eWxlPXsgeyAnZm9udEZhY2UnOiAnQXJpYWwnIH0gfVxyXG4gICAgICAgICAgICAgIGRhdGFGb3JtYXQ9e215Q2VsbEZvcm1hdHRlcn0+XHJcbiAgICAgICAgICAgICAgTWVhbFxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgIDwvQm9vdHN0cmFwVGFibGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0YXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["BootstrapTable"], {
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
      }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
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
      }, "Guest"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
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
      }, "Attending"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
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
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(ctx) {
      var invitationId, myUrl, response, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              invitationId = ctx.query.invitationId;
              console.log("invitation id: ".concat(invitationId));
              myUrl = 'http://localhost:8080/invitations/' + invitationId;
              console.log("url: ".concat(myUrl));
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()(myUrl));

            case 6:
              response = _context.sent;
              _context.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

            case 9:
              data = _context.sent;
              return _context.abrupt("return", {
                invitation: data
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Invitation;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Invitation);

/***/ })

})
//# sourceMappingURL=invitation.js.f609d18e1db6a1b124ca.hot-update.js.map