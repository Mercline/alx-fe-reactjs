import React from 'react';

function About() {
  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    margin: '20px auto',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        We are a passionate team dedicated to delivering the best service to our clients. 
        Our mission is to provide solutions that help businesses grow and succeed.
      </p>
      <p style={paragraphStyle}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
