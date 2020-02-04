import Layout from '../components/MyLayout';
import Table from '../components/Table';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

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
    const header = ['Guest', 'Attending', 'Meal']
    const rows = []
    if (invitation) {
      for (var i = 0; i < invitation.guests.length; i++) {
        let guest = invitation.guests[i]
        rows.push([
          guest.guest_id,
          guest.guest_name,
          guest.attending,
          guest.invitation_id
        ])
      }
    }
    return (
      <div>
        <Layout>
          <a>invitation page</a>
          <Table tableHeader={header} tableRows={rows}/>
        </Layout>
      </div>
    );
  }
}

// {
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
