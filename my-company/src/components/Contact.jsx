import React, { useState } from 'react';

function Contact() {
  // Declare state for form inputs using useState hooks
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change for each field
  const handleChange = (e) => {
    // Update formData with the new value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Dynamically update the specific field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting to a server

    // For demonstration, log form data or show alert
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Optionally, reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Inline styles for form elements
  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    marginTop: '10px',
  };

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '150px' }}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
