// Home.jsx
function Home() {
    const homeStyle = {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
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
      <div style={homeStyle}>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={paragraphStyle}>We are dedicated to delivering excellence in all our services. Let us help you achieve your goals with our expertise and passion for success.</p>
      </div>
    );
  }
  
  export default Home;
  