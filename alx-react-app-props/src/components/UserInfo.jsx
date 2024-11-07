// src/components/UserInfo.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';  // Import UserContext

function UserInfo() {
    // Use useContext to consume userData from UserContext
    const { userData } = useContext(UserContext);

    return (
        <div>
            <h3>User Information</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* You can add more user details or functionality here */}
        </div>
    );
}

export default UserInfo;
