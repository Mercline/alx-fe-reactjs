// About.jsx
function About() {
    const aboutStyle = {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      margin: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyle = {
      fontSize: '2.5rem',
      color: '#333',
    };
  
    const paragraphStyle = {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '800px',
      margin: '20px auto',
    };
  
    return (
      <div style={aboutStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy. Our team is dedicated to helping you grow and succeed.
        </p>
      </div>
    );
  }
  
  export default About;
  