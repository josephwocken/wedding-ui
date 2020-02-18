import React from "react";
import Layout from '../components/MyLayout';
import Table from '../components/Table';
import TableStyle from '../components/TableStyle';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Dropdown from 'react-bootstrap/Dropdown';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Invitation extends React.Component {

  constructor(props) {
    super(props)
  }

  static async getInitialProps(ctx) {
    const invitationId = ctx.query.invitationId
    console.log(`invitation id: ${invitationId}`)
    const myUrl = 'http://localhost:8080/invitations/' + invitationId
    console.log(`url: ${myUrl}`)
    const response = await fetch(myUrl)
    const data = await response.json();

    return {
      invitation: data
    }
  }

  render() {
    const invitation = this.props.invitation
    const guests = []
    if (invitation) {
      for (var i = 0; i < invitation.guests.length; i++) {
        let guestElem = invitation.guests[i]
        guests.push({
          invitationId: invitation.invitation_id,
          guestId: guestElem.guest_id,
          guest: guestElem.guest_name,
          attending: guestElem.attending,
          meal: guestElem.meal
        })
      }
    }
    if (!invitation) {
      return (
        <div>'loading...'</div>
      );
    } else {
      console.log(`got invitation: ${invitation.guests[0].attending}`)
    }

    function updateInvitation(invitationUpdate) {
      console.log(`received invitation update: ${JSON.stringify(invitationUpdate)}`)
      const invitationUpdateResponse = fetch('http://localhost:8080/invitations', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(invitationUpdate)
      })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          console.log(`success updating invitation`)
        }
        return response;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    // is called even when there's no change to the cell. i don't know if there's a way to get hooks into the previous state of the row from here (to tell if there's a difference)
    function onAfterSaveCell(row, cellName, cellValue) {
      const meal = row['meal']
      const attending = row['attending']
      const invitationId = row['invitationId']
      const guestId = row['guestId']

      // update will be on each cell, so we only need to worry about one guest being updated at a time (since each guest is a row in the table)
      let invitationUpdate = {
        invitation_id: invitationId,
        rsvped: true,
        guests: [
          {
            guest_id: guestId,
            attending: attending,
            meal: meal
          }
        ]
      }
      console.log(`invitation update: ${JSON.stringify(invitationUpdate)}`)
      updateInvitation(invitationUpdate)
    }

    function onBeforeSaveCell(row, cellName, cellValue) {
      // You can do any validation on here for editing value,
      // return false for reject the editing
      if (cellName == 'meal') {
        if (cellValue != 'BURGER' && cellValue != 'CHICKEN') {
          console.log(`trying to change to invalid meal: ${cellValue}`)
          return false
        }
      } else if (cellName == 'attending') {
        if (cellValue != 'true' && cellValue != 'false') {
          console.log(`trying to change to invalid attending: ${cellValue}`)
          return false
        }
      }
      return true;
    }

    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
      afterSaveCell: onAfterSaveCell  // a hook for after saving cell
    };

    const trStyle = (row, rowIndex) => {
      return {
        backgroundColor: '#e6d5d5'
      };
    }

    function myCellFormatter(cell, row) {
      return (
        <div>
          <p>
            {cell}
          </p>
          <style jsx>{`
            p {
              font-family: 'Arial'
            }
          `}</style>
        </div>
      );
    }

    function myAttendingCellFormatter(cell, row) {
      let result = 'no'
      if (cell == true) {
        result = 'yes'
      }
      return (
        <div>
          <p>
            {result}
          </p>
          <style jsx>{`
            p {
              font-family: 'Arial'
            }
          `}</style>
        </div>
      );
    }

    return (
      <Layout>
        <h3>
          Click a field to edit.
        </h3>
        <style jsx>{`
          h3 {
            font-family: 'Arial';
          }
        `}</style>
        <BootstrapTable data={ guests }  cellEdit={ cellEditProp }
          tableStyle={ { border: 'black 1px solid' } }
          headerStyle={ { border: 'black 1px solid' } }
          bodyStyle={ { border: 'black 1px solid' } }
          striped={ true }
          hover={ true }>
            <TableHeaderColumn
              dataField='guest'
              isKey={ true }
              width='10%'
              dataAlign='center'
              dataFormat={myCellFormatter}>
              Guest
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='attending'
              dataAlign='center'
              width='10%'
              thStyle={ { 'fontWeight': 'lighter' } }
              dataFormat={myAttendingCellFormatter}>
              Attending
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField='meal'
              dataAlign='center'
              width='10%'
              tdStyle={ { 'fontFace': 'Arial' } }
              dataFormat={myCellFormatter}>
              Meal
            </TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    );
  }
}

export default Invitation;
