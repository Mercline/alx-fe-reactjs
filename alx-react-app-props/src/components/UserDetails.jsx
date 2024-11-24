// src/components/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';  // Import UserContext

function UserDetails() {
    // Use useContext to get the current user data from the UserContext
    const { userData } = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
