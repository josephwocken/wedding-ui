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

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-4030872392",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("font", {
        face: "calibri",
        className: "jsx-4030872392",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
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
          lineNumber: 140
        },
        __self: this
      }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "guest",
        isKey: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Guest"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "attending",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Attending"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_15__["TableHeaderColumn"], {
        dataField: "meal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Meal")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4030872392",
        __self: this
      }, "th.jsx-4030872392,td.jsx-4030872392{font-family:'Arial';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zZXBcXGRldlxcd2VkZGluZy11aVxccGFnZXNcXGludml0YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUpvQixBQUdpQyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NlcFxcZGV2XFx3ZWRkaW5nLXVpXFxwYWdlc1xcaW52aXRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVTdHlsZSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlU3R5bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCB7Qm9vdHN0cmFwVGFibGUsIFRhYmxlSGVhZGVyQ29sdW1ufSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUnO1xyXG5cclxuY2xhc3MgSW52aXRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uSWQgPSBjdHgucXVlcnkuaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiBpZDogJHtpbnZpdGF0aW9uSWR9YClcclxuICAgIGNvbnN0IG15VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucy8nICsgaW52aXRhdGlvbklkXHJcbiAgICBjb25zb2xlLmxvZyhgdXJsOiAke215VXJsfWApXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG15VXJsKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbnZpdGF0aW9uOiBkYXRhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uID0gdGhpcy5wcm9wcy5pbnZpdGF0aW9uXHJcbiAgICBjb25zdCBndWVzdHMgPSBbXVxyXG4gICAgaWYgKGludml0YXRpb24pIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnZpdGF0aW9uLmd1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBndWVzdEVsZW0gPSBpbnZpdGF0aW9uLmd1ZXN0c1tpXVxyXG4gICAgICAgIGd1ZXN0cy5wdXNoKHtcclxuICAgICAgICAgIGludml0YXRpb25JZDogaW52aXRhdGlvbi5pbnZpdGF0aW9uX2lkLFxyXG4gICAgICAgICAgZ3Vlc3RJZDogZ3Vlc3RFbGVtLmd1ZXN0X2lkLFxyXG4gICAgICAgICAgZ3Vlc3Q6IGd1ZXN0RWxlbS5ndWVzdF9uYW1lLFxyXG4gICAgICAgICAgYXR0ZW5kaW5nOiBndWVzdEVsZW0uYXR0ZW5kaW5nLFxyXG4gICAgICAgICAgbWVhbDogZ3Vlc3RFbGVtLm1lYWxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWludml0YXRpb24pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2Pidsb2FkaW5nLi4uJzwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coYGdvdCBpbnZpdGF0aW9uOiAke2ludml0YXRpb24uZ3Vlc3RzWzBdLmF0dGVuZGluZ31gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUludml0YXRpb24oaW52aXRhdGlvblVwZGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgcmVjZWl2ZWQgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgY29uc3QgaW52aXRhdGlvblVwZGF0ZVJlc3BvbnNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbnZpdGF0aW9ucycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGludml0YXRpb25VcGRhdGUpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzIHVwZGF0aW5nIGludml0YXRpb25gKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzIGNhbGxlZCBldmVuIHdoZW4gdGhlcmUncyBubyBjaGFuZ2UgdG8gdGhlIGNlbGwuIGkgZG9uJ3Qga25vdyBpZiB0aGVyZSdzIGEgd2F5IHRvIGdldCBob29rcyBpbnRvIHRoZSBwcmV2aW91cyBzdGF0ZSBvZiB0aGUgcm93IGZyb20gaGVyZSAodG8gdGVsbCBpZiB0aGVyZSdzIGEgZGlmZmVyZW5jZSlcclxuICAgIGZ1bmN0aW9uIG9uQWZ0ZXJTYXZlQ2VsbChyb3csIGNlbGxOYW1lLCBjZWxsVmFsdWUpIHtcclxuICAgICAgYWxlcnQoYFNhdmUgY2VsbCAke2NlbGxOYW1lfSB3aXRoIHZhbHVlICR7Y2VsbFZhbHVlfWApO1xyXG5cclxuICAgICAgbGV0IHJvd1N0ciA9ICcnO1xyXG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcm93KSB7XHJcbiAgICAgICAgcm93U3RyICs9IHByb3AgKyAnOiAnICsgcm93W3Byb3BdICsgJ1xcbic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFsZXJ0KCdUaGUgd2hvbGUgcm93IDpcXG4nICsgcm93U3RyKTtcclxuICAgICAgY29uc3QgbWVhbCA9IHJvd1snbWVhbCddXHJcbiAgICAgIGNvbnN0IGF0dGVuZGluZyA9IHJvd1snYXR0ZW5kaW5nJ11cclxuICAgICAgY29uc3QgaW52aXRhdGlvbklkID0gcm93WydpbnZpdGF0aW9uSWQnXVxyXG4gICAgICBjb25zdCBndWVzdElkID0gcm93WydndWVzdElkJ11cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSB3aWxsIGJlIG9uIGVhY2ggY2VsbCwgc28gd2Ugb25seSBuZWVkIHRvIHdvcnJ5IGFib3V0IG9uZSBndWVzdCBiZWluZyB1cGRhdGVkIGF0IGEgdGltZSAoc2luY2UgZWFjaCBndWVzdCBpcyBhIHJvdyBpbiB0aGUgdGFibGUpXHJcbiAgICAgIGxldCBpbnZpdGF0aW9uVXBkYXRlID0ge1xyXG4gICAgICAgIGludml0YXRpb25faWQ6IGludml0YXRpb25JZCxcclxuICAgICAgICByc3ZwZWQ6IHRydWUsXHJcbiAgICAgICAgZ3Vlc3RzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGd1ZXN0X2lkOiBndWVzdElkLFxyXG4gICAgICAgICAgICBhdHRlbmRpbmc6IGF0dGVuZGluZyxcclxuICAgICAgICAgICAgbWVhbDogbWVhbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiB1cGRhdGU6ICR7SlNPTi5zdHJpbmdpZnkoaW52aXRhdGlvblVwZGF0ZSl9YClcclxuICAgICAgdXBkYXRlSW52aXRhdGlvbihpbnZpdGF0aW9uVXBkYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2F2ZUNlbGwocm93LCBjZWxsTmFtZSwgY2VsbFZhbHVlKSB7XHJcbiAgICAgIC8vIFlvdSBjYW4gZG8gYW55IHZhbGlkYXRpb24gb24gaGVyZSBmb3IgZWRpdGluZyB2YWx1ZSxcclxuICAgICAgLy8gcmV0dXJuIGZhbHNlIGZvciByZWplY3QgdGhlIGVkaXRpbmdcclxuICAgICAgaWYgKGNlbGxOYW1lID09ICdtZWFsJykge1xyXG4gICAgICAgIGlmIChjZWxsVmFsdWUgIT0gJ0JVUkdFUicgJiYgY2VsbFZhbHVlICE9ICdDSElDS0VOJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYHRyeWluZyB0byBjaGFuZ2UgdG8gaW52YWxpZCBtZWFsOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGNlbGxOYW1lID09ICdhdHRlbmRpbmcnKSB7XHJcbiAgICAgICAgaWYgKGNlbGxWYWx1ZSAhPSAndHJ1ZScgJiYgY2VsbFZhbHVlICE9ICdmYWxzZScpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gY2hhbmdlIHRvIGludmFsaWQgYXR0ZW5kaW5nOiAke2NlbGxWYWx1ZX1gKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNlbGxFZGl0UHJvcCA9IHtcclxuICAgICAgbW9kZTogJ2NsaWNrJyxcclxuICAgICAgYmx1clRvU2F2ZTogdHJ1ZSxcclxuICAgICAgYmVmb3JlU2F2ZUNlbGw6IG9uQmVmb3JlU2F2ZUNlbGwsIC8vIGEgaG9vayBmb3IgYmVmb3JlIHNhdmluZyBjZWxsXHJcbiAgICAgIGFmdGVyU2F2ZUNlbGw6IG9uQWZ0ZXJTYXZlQ2VsbCAgLy8gYSBob29rIGZvciBhZnRlciBzYXZpbmcgY2VsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0clN0eWxlID0gKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTZkNWQ1J1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGZvbnQgZmFjZT1cImNhbGlicmlcIj5DbGljayBhIGZpZWxkIHRvIGVkaXQuPC9mb250PlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPEJvb3RzdHJhcFRhYmxlIGRhdGE9eyBndWVzdHMgfSAgY2VsbEVkaXQ9eyBjZWxsRWRpdFByb3AgfVxyXG4gICAgICAgICAgdGFibGVTdHlsZT17IHsgYm9yZGVyOiAnYmxhY2sgMXB4IHNvbGlkJyB9IH1cclxuICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXsgeyBib3JkZXI6ICdibGFjayAxcHggc29saWQnIH0gfVxyXG4gICAgICAgICAgaGVhZGVyU3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICBib2R5U3R5bGU9eyB7IGJvcmRlcjogJ2JsYWNrIDFweCBzb2xpZCcgfSB9XHJcbiAgICAgICAgICB0clN0eWxlPXsgdHJTdHlsZSB9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gZGF0YUZpZWxkPSdndWVzdCcgaXNLZXk9eyB0cnVlIH0+R3Vlc3Q8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gZGF0YUZpZWxkPSdhdHRlbmRpbmcnPkF0dGVuZGluZzwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbiBkYXRhRmllbGQ9J21lYWwnPk1lYWw8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgIDwvQm9vdHN0cmFwVGFibGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\josep\\\\dev\\\\wedding-ui\\\\pages\\\\invitation.js */"));
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
//# sourceMappingURL=invitation.js.8b12b0797533669938d4.hot-update.js.map