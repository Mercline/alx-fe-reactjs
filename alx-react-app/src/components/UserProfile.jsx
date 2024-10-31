// src/components/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';

function UserProfile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired, // Ensures bio is included
};

export default UserProfile;
