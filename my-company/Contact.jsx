import React, { useState } from 'react';

function Contact() {
  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes in form input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  // Container style
  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  };

  // Heading style
  const headingStyle = {
    fontSize: '36px',
    color: '#333',
  };

  // Form container style
  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // Input field style
  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  // Button style
  const buttonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <div style={formStyle}>
        {/* Form with controlled inputs */}
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            style={inputStyle}
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
