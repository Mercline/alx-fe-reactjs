// src/components/UserProfile.jsx
import React from 'react';

function UserProfile(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>       {/* Display user's name */}
            <p>Age: {props.age}</p>     {/* Display user's age */}
            <p>Bio: {props.bio}</p>          {/* Display user's bio */}
        </div>
    );
}

export default UserProfile;
