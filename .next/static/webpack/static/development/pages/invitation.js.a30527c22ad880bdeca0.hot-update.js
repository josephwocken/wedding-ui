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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_TableStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TableStyle */ "./components/TableStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap-table */ "./node_modules/react-bootstrap-table/lib/index.js");
/* harmony import */ var react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\josep\\dev\\wedding-ui\\pages\\invitation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









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
        var invitationUpdateResponse = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()('http://localhost:8080/invitations', {
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

      trStyle = function trStyle(row, rowIndex) {
        return {
          backgroundColor: '#FFFAFA'
        };
      };

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__["BootstrapTable"], {
        data: guests,
        cellEdit: cellEditProp,
        trStyle: this.trStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__["TableHeaderColumn"], {
        dataField: "guest",
        isKey: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Guest"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__["TableHeaderColumn"], {
        dataField: "attending",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Attending"), __jsx(react_bootstrap_table__WEBPACK_IMPORTED_MODULE_14__["TableHeaderColumn"], {
        dataField: "meal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(myUrl));

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
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Invitation);

/***/ })

})
//# sourceMappingURL=invitation.js.a30527c22ad880bdeca0.hot-update.js.map