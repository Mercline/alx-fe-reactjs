// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the components
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router - Nested Routing Example</h1>

        {/* Define the main routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Profile route with nested routes */}
          <Route path="/profile" element={<Profile />}>
            {/* Nested routes for ProfileDetails and ProfileSettings */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
