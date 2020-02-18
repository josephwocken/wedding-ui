import Layout from '../components/MyLayout';
import Link from 'next/link';

class SearchInvitations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStringInput: '',
      matchingInvitations: [],
      error: false,
      isLoaded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchInvitationsForGuest = this.searchInvitationsForGuest.bind(this);
  }

  handleChange(event) {
    this.setState({
        searchStringInput: event.target.value
    });
  }

  handleSubmit(event) {
    let searchString = this.state.searchStringInput
    console.log(`Search String: ${searchString}`)
    this.searchInvitationsForGuest(searchString)
    event.preventDefault();
  }

 searchInvitationsForGuest(searchString) {
    console.log(`in search invitations function with input: ${searchString}`)
    let requestBody = {
      'guest_search_string': '' + searchString + ''
    }
    console.log(`request body: ${JSON.stringify(requestBody)}`)
    const invitationSearchResponse = fetch('http://localhost:8080/guest_invitations/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('Success:', data);
      this.setState({
        'matchingInvitations': data,
        'isLoaded': true,
        'error': false
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      this.setState({
        'isLoaded': true,
        'error': true
      })
    });

  }

  render() {
    const { searchStringInput, matchingInvitations, isLoaded, error } = this.state

    var invitationToGuestsMap = new Map()
    if (matchingInvitations) {
      for (var i = 0; i < matchingInvitations.length; i++) {
        let invitation = matchingInvitations[i]
        console.log(`invitation = ${invitation}`)
        var guestsForInvitation = ''
        if (invitation && invitation.guests) {
          for (var j = 0; j < invitation.guests.length; j++) {
            guestsForInvitation += invitation.guests[j].guest_name
            if (j != invitation.guests.length - 1) {
              guestsForInvitation += ', '
            }
          }
        }
        invitationToGuestsMap[invitation.invitation_id] = guestsForInvitation
      }
    } else {
      console.log(`no matching invitations`)
    }


    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.searchStringInput} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <style jsx>{`
            label {
              font-family: 'Arial';
            }
            input {
              font-family: 'Arial';
            }
          `}</style>
        </div>
        <div>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>Invitation ID</th>
                <th>Guest(s)</th>
              </tr>
            </thead>
            <tbody>
              {matchingInvitations.map(invitation =>
                <tr key={invitation.invitation_id}>
                  <td>
                    <Link href={{ pathname: "/invitation", query: { invitationId: invitation.invitation_id}}}>
                      <a>{invitation.invitation_id}</a>
                    </Link>
                  </td>
                  <td>
                    {invitationToGuestsMap[invitation.invitation_id]}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <style jsx>{`
            th {
              font-family: 'Arial';
            }
            td {
              font-family: 'Arial';
            }
          `}</style>
        </div>
      </div>
    );
  }
}

export default function SearchInvitationsLayout() {
  return (
    <Layout>
      <br></br>
      <SearchInvitations/>
    </Layout>
  );
}
