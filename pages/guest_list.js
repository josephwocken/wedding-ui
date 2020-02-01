import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const GuestList = props => (
  <Layout>
    <h1>Wedding Guests</h1>
    <ul>
      {props.guests.map(guest => (
        <li key={guest.guest_id}>
          <a>{guest.guest_name}</a>
        </li>
      ))}
    </ul>
  </Layout>
);

GuestList.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080/guests');
  const data = await res.json();

  console.log(`Guest data fetched. Count: ${data.length}`);

  return {
    guests: data
  };
};

export default GuestList;
