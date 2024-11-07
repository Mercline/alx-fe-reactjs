// Services.jsx
function Services() {
    const servicesStyle = {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      margin: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyle = {
      fontSize: '2.5rem',
      color: '#333',
    };
  
    const listStyle = {
      listStyleType: 'none',
      padding: 0,
      fontSize: '1.2rem',
      color: '#666',
      margin: '20px auto',
      maxWidth: '800px',
    };
  
    const listItemStyle = {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
  
    return (
      <div style={servicesStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>Technology Consulting</li>
          <li style={listItemStyle}>Market Analysis</li>
          <li style={listItemStyle}>Product Development</li>
        </ul>
      </div>
    );
  }
  
  export default Services;
  