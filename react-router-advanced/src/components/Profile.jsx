// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* This is where the nested routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default Profile;
