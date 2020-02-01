import Layout from '../components/MyLayout';

class SearchInvitations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStringInput: '',
      matchingInvitations: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchInvitationsForGuest = this.searchInvitationsForGuest.bind(this);
  }

  handleChange(event) {
    this.setState({
        searchStringInput: event.target.value.toUpperCase()
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
        'matchingInvitations': JSON.stringify(data)
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.searchStringInput} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        Result: {this.state.matchingInvitations}
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
