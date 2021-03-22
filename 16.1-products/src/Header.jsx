import { Link } from 'react-router-dom';

import React from 'react';

const Header = () => {
  const styleHeader = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: '50px',
  };

  const styleItems = {
    margin: '2rem',
  };

  return (
    <div style={styleHeader}>
      <h1>I'm Always Here</h1>
      <Link style={styleItems} to='/'>
        Home
      </Link>
      <Link style={styleItems} to='/products'>
        Products
      </Link>
    </div>
  );
};

export default Header;
