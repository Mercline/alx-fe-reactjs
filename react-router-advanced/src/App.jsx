import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost'; // Import the BlogPost component

const App = () => {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          {/* Add the dynamic route for blog posts */}
          <Route path="/post/:postId" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
