// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'sticky',
    top: 0,
    width: '100%',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#555', // darken on hover
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = '')}>
        Home
      </Link>
      <Link to="/about" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = '')}>
        About
      </Link>
      <Link to="/services" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = '')}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle} onMouseOver={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = '')}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
