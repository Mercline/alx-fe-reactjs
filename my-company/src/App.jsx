import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import Navbar from './Navbar'; // Import Navbar
import Home from './Home'; // Import Home page component
import About from './About'; // Import About page component
import Services from './Services'; // Import Services page component
import Contact from './Contact'; // Import Contact page component

function App() {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    paddingBottom: '40px', // Padding for footer if needed
  };

  return (
    <Router>
      <div style={appStyle}>
        {/* Navbar component will appear on every page */}
        <Navbar />

        {/* Define routes using the 'Routes' and 'Route' components */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/services" element={<Services />} /> {/* Services Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
