// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserProfile() {
    // Use the useContext hook to consume the userData from UserContext
    const { userData } = useContext(UserContext);

    return (
        <div>
            <h2>Name: {userData.name}</h2>       {/* Display user's name */}
            <p>Age: {userData.age}</p>          {/* Display user's age */}
            <p>Bio: {userData.bio}</p>          {/* Display user's bio */}
        </div>
    );
}

export default UserProfile;
