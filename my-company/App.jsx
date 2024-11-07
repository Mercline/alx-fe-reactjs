import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="/about" style={styles.navItem}>About</Link></li>
          <li><Link to="/services" style={styles.navItem}>Services</Link></li>
          <li><Link to="/contact" style={styles.navItem}>Contact</Link></li>
        </ul>
      </nav>

      <div style={styles.content}>
        {/* Routes setup for React Router v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

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
