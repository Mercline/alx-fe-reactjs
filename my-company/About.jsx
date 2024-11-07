import React from 'react';

function About() {
  // Container style with background and padding
  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#fafafa', // Light gray background for the section
    minHeight: '100vh', // Ensures the section takes full height
  };

  // Heading style for the main title
  const headingStyle = {
    fontSize: '36px',
    color: '#333', // Dark gray for the heading
  };

  // Paragraph style for content text
  const paragraphStyle = {
    fontSize: '18px',
    color: '#555', // Medium gray for the paragraph text
    maxWidth: '800px', // Limit the width for better readability
    margin: '20px auto', // Center the paragraph with margin
    lineHeight: '1.6', // Improve readability with line height
  };

  // Additional paragraph style for a historical paragraph
  const historyStyle = {
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    margin: '20px auto',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>

      {/* First paragraph about the company */}
      <p style={paragraphStyle}>
        We are a passionate team dedicated to delivering the best service to our clients. 
        Our mission is to provide solutions that help businesses grow and succeed.
      </p>

      {/* Second paragraph about the company's history */}
      <p style={historyStyle}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
