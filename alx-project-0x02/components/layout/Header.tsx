
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>
        About
      </Link>
      <Link href="/home">Home Page</Link>
      <Link href="/posts" passHref legacyBehavior>
          <a className="hover:text-blue-500">Posts</a>
        </Link>
        <Link href="/users" style={{ marginRight: '1rem' }}>
        Users
      </Link>
    </nav>
  );
};

export default Header;
