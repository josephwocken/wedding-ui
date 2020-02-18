import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  textDecoration: 'underline'
};


const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/guest_list">
      <a>Guest List</a>
    </Link>
    <Link href="/search_invitations">
      <a>Search Invitations</a>
    </Link>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: underline;
        color: blue;
        margin: 15px;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
)

export default Header;
