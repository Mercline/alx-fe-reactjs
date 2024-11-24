// src/components/ProfilePage.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';  // Import UserContext
import UserInfo from './UserInfo';         // Import UserInfo component

function ProfilePage() {
    // Use the useContext hook to consume userData from UserContext
    const { userData } = useContext(UserContext);

    return (
        <div>
            <h1>Profile Page</h1>
            {/* Access userData directly from the context */}
            <h2>Name: {userData.name}</h2>
            <p>Email: {userData.email}</p>
            <UserInfo />  {/* Pass userData down to UserInfo if needed */}
        </div>
    );
}

export default ProfilePage;
