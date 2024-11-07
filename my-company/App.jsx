import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Assuming you have Home component
import About from './About'; // Assuming you have About component
import Services from './Services'; // Assuming you have Services component
import Contact from './Contact'; // Assuming you have Contact component

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/about" style={styles.navItem}>About</Link></li>
          <li><Link to="/services" style={styles.navItem}>Services</Link></li>
          <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.content}>
        <Routes>
          {/* Define Routes for Each Page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all Route for 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

// Styling for the app
const styles = {
  nav: {
    padding: '10px',
    backgroundColor: '#333',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: 'white',
    padding: '10px',
    textDecoration: 'none',
  },
  content: {
    padding: '20px',
  },
};

export default App;
