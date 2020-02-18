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
        alert("Save cell ".concat(cellName, " with value ").concat(cellValue));
        var rowStr = '';

        for (var prop in row) {
          rowStr += prop + ': ' + row[prop] + '\n';
        }

        alert('The whole row :\n' + rowStr);
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
            lineNumber: 137
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-778162326",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, cell), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "778162326",
          __self: this
        }, "p.jsx-778162326{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNElzQixBQUlZLG9CQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlU3R5bGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZVN0eWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQge0Jvb3RzdHJhcFRhYmxlLCBUYWJsZUhlYWRlckNvbHVtbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlJztcclxuXHJcbmNsYXNzIEludml0YXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbklkID0gY3R4LnF1ZXJ5Lmludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYGludml0YXRpb24gaWQ6ICR7aW52aXRhdGlvbklkfWApXHJcbiAgICBjb25zdCBteVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMvJyArIGludml0YXRpb25JZFxyXG4gICAgY29uc29sZS5sb2coYHVybDogJHtteVVybH1gKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW52aXRhdGlvbjogZGF0YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IHRoaXMucHJvcHMuaW52aXRhdGlvblxyXG4gICAgY29uc3QgZ3Vlc3RzID0gW11cclxuICAgIGlmIChpbnZpdGF0aW9uKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW52aXRhdGlvbi5ndWVzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZ3Vlc3RFbGVtID0gaW52aXRhdGlvbi5ndWVzdHNbaV1cclxuICAgICAgICBndWVzdHMucHVzaCh7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uSWQ6IGludml0YXRpb24uaW52aXRhdGlvbl9pZCxcclxuICAgICAgICAgIGd1ZXN0SWQ6IGd1ZXN0RWxlbS5ndWVzdF9pZCxcclxuICAgICAgICAgIGd1ZXN0OiBndWVzdEVsZW0uZ3Vlc3RfbmFtZSxcclxuICAgICAgICAgIGF0dGVuZGluZzogZ3Vlc3RFbGVtLmF0dGVuZGluZyxcclxuICAgICAgICAgIG1lYWw6IGd1ZXN0RWxlbS5tZWFsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpbnZpdGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4nbG9hZGluZy4uLic8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBnb3QgaW52aXRhdGlvbjogJHtpbnZpdGF0aW9uLmd1ZXN0c1swXS5hdHRlbmRpbmd9YClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVJbnZpdGF0aW9uKGludml0YXRpb25VcGRhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkIGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25VcGRhdGVSZXNwb25zZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvaW52aXRhdGlvbnMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzcyB1cGRhdGluZyBpbnZpdGF0aW9uYClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpcyBjYWxsZWQgZXZlbiB3aGVuIHRoZXJlJ3Mgbm8gY2hhbmdlIHRvIHRoZSBjZWxsLiBpIGRvbid0IGtub3cgaWYgdGhlcmUncyBhIHdheSB0byBnZXQgaG9va3MgaW50byB0aGUgcHJldmlvdXMgc3RhdGUgb2YgdGhlIHJvdyBmcm9tIGhlcmUgKHRvIHRlbGwgaWYgdGhlcmUncyBhIGRpZmZlcmVuY2UpXHJcbiAgICBmdW5jdGlvbiBvbkFmdGVyU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIGFsZXJ0KGBTYXZlIGNlbGwgJHtjZWxsTmFtZX0gd2l0aCB2YWx1ZSAke2NlbGxWYWx1ZX1gKTtcclxuXHJcbiAgICAgIGxldCByb3dTdHIgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHJvdykge1xyXG4gICAgICAgIHJvd1N0ciArPSBwcm9wICsgJzogJyArIHJvd1twcm9wXSArICdcXG4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbGVydCgnVGhlIHdob2xlIHJvdyA6XFxuJyArIHJvd1N0cik7XHJcbiAgICAgIGNvbnN0IG1lYWwgPSByb3dbJ21lYWwnXVxyXG4gICAgICBjb25zdCBhdHRlbmRpbmcgPSByb3dbJ2F0dGVuZGluZyddXHJcbiAgICAgIGNvbnN0IGludml0YXRpb25JZCA9IHJvd1snaW52aXRhdGlvbklkJ11cclxuICAgICAgY29uc3QgZ3Vlc3RJZCA9IHJvd1snZ3Vlc3RJZCddXHJcblxyXG4gICAgICAvLyB1cGRhdGUgd2lsbCBiZSBvbiBlYWNoIGNlbGwsIHNvIHdlIG9ubHkgbmVlZCB0byB3b3JyeSBhYm91dCBvbmUgZ3Vlc3QgYmVpbmcgdXBkYXRlZCBhdCBhIHRpbWUgKHNpbmNlIGVhY2ggZ3Vlc3QgaXMgYSByb3cgaW4gdGhlIHRhYmxlKVxyXG4gICAgICBsZXQgaW52aXRhdGlvblVwZGF0ZSA9IHtcclxuICAgICAgICBpbnZpdGF0aW9uX2lkOiBpbnZpdGF0aW9uSWQsXHJcbiAgICAgICAgcnN2cGVkOiB0cnVlLFxyXG4gICAgICAgIGd1ZXN0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBndWVzdF9pZDogZ3Vlc3RJZCxcclxuICAgICAgICAgICAgYXR0ZW5kaW5nOiBhdHRlbmRpbmcsXHJcbiAgICAgICAgICAgIG1lYWw6IG1lYWxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYGludml0YXRpb24gdXBkYXRlOiAke0pTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpfWApXHJcbiAgICAgIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNhdmVDZWxsKHJvdywgY2VsbE5hbWUsIGNlbGxWYWx1ZSkge1xyXG4gICAgICAvLyBZb3UgY2FuIGRvIGFueSB2YWxpZGF0aW9uIG9uIGhlcmUgZm9yIGVkaXRpbmcgdmFsdWUsXHJcbiAgICAgIC8vIHJldHVybiBmYWxzZSBmb3IgcmVqZWN0IHRoZSBlZGl0aW5nXHJcbiAgICAgIGlmIChjZWxsTmFtZSA9PSAnbWVhbCcpIHtcclxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9ICdCVVJHRVInICYmIGNlbGxWYWx1ZSAhPSAnQ0hJQ0tFTicpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgbWVhbDogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjZWxsTmFtZSA9PSAnYXR0ZW5kaW5nJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ3RydWUnICYmIGNlbGxWYWx1ZSAhPSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJ5aW5nIHRvIGNoYW5nZSB0byBpbnZhbGlkIGF0dGVuZGluZzogJHtjZWxsVmFsdWV9YClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjZWxsRWRpdFByb3AgPSB7XHJcbiAgICAgIG1vZGU6ICdjbGljaycsXHJcbiAgICAgIGJsdXJUb1NhdmU6IHRydWUsXHJcbiAgICAgIGJlZm9yZVNhdmVDZWxsOiBvbkJlZm9yZVNhdmVDZWxsLCAvLyBhIGhvb2sgZm9yIGJlZm9yZSBzYXZpbmcgY2VsbFxyXG4gICAgICBhZnRlclNhdmVDZWxsOiBvbkFmdGVyU2F2ZUNlbGwgIC8vIGEgaG9vayBmb3IgYWZ0ZXIgc2F2aW5nIGNlbGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHJTdHlsZSA9IChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2U2ZDVkNSdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBteUNlbGxGb3JtYXR0ZXIoY2VsbCwgcm93KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2VsbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGZvbnQgZmFjZT1cImNhbGlicmlcIj5DbGljayBhIGZpZWxkIHRvIGVkaXQuPC9mb250PlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPEJvb3RzdHJhcFRhYmxlIGRhdGE9eyBndWVzdHMgfSAgY2VsbEVkaXQ9eyBjZWxsRWRpdFByb3AgfVxyXG4gICAgICAgICAgdGFibGVTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgaGVhZGVyU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBib2R5U3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICB0clN0eWxlPXsgdHJTdHlsZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gZGF0YUZpZWxkPSdndWVzdCcgaXNLZXk9eyB0cnVlIH0gZGF0YUFsaWduPSdjZW50ZXInIGRhdGFGb3JtYXQ9e215Q2VsbEZvcm1hdHRlcn0+R3Vlc3Q8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gZGF0YUZpZWxkPSdhdHRlbmRpbmcnIGRhdGFBbGlnbj0nY2VudGVyJyB0aFN0eWxlPXsgeyAnZm9udFdlaWdodCc6ICdsaWdodGVyJyB9IH0gZGF0YUZvcm1hdD17bXlDZWxsRm9ybWF0dGVyfT5BdHRlbmRpbmc8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gZGF0YUZpZWxkPSdtZWFsJyBkYXRhQWxpZ249J2NlbnRlcicgdGRTdHlsZT17IHsgJ2ZvbnRGYWNlJzogJ0FyaWFsJyB9IH0gZGF0YUZvcm1hdD17bXlDZWxsRm9ybWF0dGVyfT5NZWFsPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICA8L0Jvb3RzdHJhcFRhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
      }

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("font", {
        face: "calibri",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Click a field to edit.")), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["BootstrapTable"], {
        data: guests,
        cellEdit: cellEditProp,
        tableStyle: {
          border: 'black 1px solid'
        },
        containerStyle: {
          border: 'black 1px solid'
        },
        headerStyle: {
          border: 'black 1px solid'
        },
        bodyStyle: {
          border: 'black 1px solid'
        },
        trStyle: trStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "guest",
        isKey: true,
        dataAlign: "center",
        dataFormat: myCellFormatter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Guest"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "attending",
        dataAlign: "center",
        thStyle: {
          'fontWeight': 'lighter'
        },
        dataFormat: myCellFormatter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Attending"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "meal",
        dataAlign: "center",
        tdStyle: {
          'fontFace': 'Arial'
        },
        dataFormat: myCellFormatter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
//# sourceMappingURL=invitation.js.78c53f0c899ebfdd6d7b.hot-update.js.map