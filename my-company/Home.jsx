import React from 'react';

function Home() {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Website!</h1>
      <p style={paragraphStyle}>We're glad you're here. Explore our services, learn more about our company, and feel free to get in touch with us!</p>
    </div>
  );
}

export default Home;
