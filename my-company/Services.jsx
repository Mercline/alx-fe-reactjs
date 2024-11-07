import React from 'react';

function Services() {
  // Container styles
  const containerStyle = {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  const cardStyle = {
    display: 'inline-block',
    width: '250px',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const cardTitleStyle = {
    fontSize: '24px',
    color: '#333',
  };

  const cardTextStyle = {
    color: '#555',
  };

  const listStyle = {
    paddingLeft: '20px',
    textAlign: 'left',
    fontSize: '18px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Services</h1>

      {/* Services in Card Format */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>Web Development</h2>
          <p style={cardTextStyle}>Build scalable and responsive websites with the latest technologies.</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>App Development</h2>
          <p style={cardTextStyle}>Create mobile applications that work seamlessly across all devices.</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>SEO Services</h2>
          <p style={cardTextStyle}>Optimize your website to rank higher on search engines.</p>
        </div>
      </div>

      {/* List of Additional Services */}
      <div style={{ marginTop: '50px' }}>
        <h2>Other Services We Offer:</h2>
        <ul style={listStyle}>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
