import React from 'react';

function Home() {
  // Combining the previous container styles with the new content
  const containerStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f0f0f0', // Light gray background for the page
    minHeight: '100vh', // Full page height
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333', // Dark gray for the title
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#666', // Lighter gray for the paragraph
    marginBottom: '30px', // Spacing below the paragraph
  };

  const subHeadingStyle = {
    fontSize: '28px',
    color: '#333', // Same color as heading for consistency
    marginTop: '20px', // Adding spacing above the subheading
  };

  const subParagraphStyle = {
    fontSize: '18px',
    color: '#555', // Slightly darker gray for the sub paragraph
    maxWidth: '800px',
    margin: '0 auto', // Center the paragraph
    lineHeight: '1.6', // Improve readability with line height
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Company</h1>
      <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services.</p>

      {/* New section with subheading and paragraph */}
      <h2 style={subHeadingStyle}>Our Mission</h2>
      <p style={subParagraphStyle}>
        At our company, we strive to innovate and create solutions that help businesses grow.
        With a dedicated team and a passion for success, we are committed to making a positive impact in the world.
      </p>
    </div>
  );
}

export default Home;
