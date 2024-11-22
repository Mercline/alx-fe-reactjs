// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails'; // Nested component
import ProfileSettings from './components/ProfileSettings'; // Nested component

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Profile Route with Nested Routes */}
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
