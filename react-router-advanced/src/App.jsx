// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router Nested and Dynamic Routing Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Nested routes for Profile */}
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic route for blog posts */}
          <Route path="/post/:postId" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
