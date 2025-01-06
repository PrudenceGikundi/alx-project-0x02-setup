
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
    </nav>
  );
};

export default Header;
