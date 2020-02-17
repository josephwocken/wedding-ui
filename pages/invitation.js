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
    // https://github.com/AllenFang/react-bootstrap-table/blob/master/examples/js/cell-edit/custom-cell-edit-table.js
    return (
      <Layout>
        <BootstrapTable data={ guests }>
            <TableHeaderColumn dataField='guest' isKey={ true }>Guest</TableHeaderColumn>
            <TableHeaderColumn dataField='attending'>Attending</TableHeaderColumn>
            <TableHeaderColumn dataField='meal'>Meal</TableHeaderColumn>
        </BootstrapTable>
      </Layout>
    );
  }
}

// <Layout>
//   <TableStyle>
//     <table>
//       <thead>
//         <tr>
//           <th>Guest</th>
//           <th>Attending</th>
//           <th>Meal</th>
//         </tr>
//       </thead>
//       <tbody>
//         {invitation.guests.map(guest =>
//           <tr key={guest.guest_id}>
//             <td>
//               {guest.guest_name}
//             </td>
//             <td>
//               {guest.attending.toString()}
//             </td>
//             <td>
//               {guest.meal}
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </TableStyle>
// </Layout>
// { <Table tableHeader={header} tableRows={rows}/>
//     "invitation_id": 4,
//     "rsvped": false,
//     "guests": [
//         {
//             "guest_id": 4,
//             "guest_name": "sophia korman",
//             "attending": false,
//             "invitation_id": 2
//         }
//     ]
// }
export default Invitation;
