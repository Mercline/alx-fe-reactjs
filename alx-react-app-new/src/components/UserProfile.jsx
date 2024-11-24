// src/components/UserProfile.jsx
import React from 'react';

function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ fontSize: '18px', marginBottom: '5px' }}>
                Age: <span style={{ fontWeight: 'bold', color: 'darkgray' }}>{props.age}</span>
            </p>
            <p style={{ fontSize: '16px', color: 'gray' }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
