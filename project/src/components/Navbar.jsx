import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/service" style={{ margin: '0 10px' }}>Service</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
