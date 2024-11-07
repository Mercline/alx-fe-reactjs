import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  };

  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </div>
  );
}

export default Navbar;
