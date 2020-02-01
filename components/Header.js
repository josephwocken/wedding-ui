import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/guest_list">
      <a style={linkStyle}>Guest List</a>
    </Link>
    <Link href="/search_invitations">
      <a style={linkStyle}>Search Invitations</a>
    </Link>
  </div>
)

export default Header;
