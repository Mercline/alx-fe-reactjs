// MainContent.jsx
import React from 'react';

function MainContent() {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', margin: '20px', maxWidth: '600px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#333', fontFamily: 'Arial, sans-serif' }}>
                I love to visit <span style={{ color: 'navy', fontWeight: 'bold' }}>New York</span>, 
                <span style={{ color: 'darkorange', fontWeight: 'bold' }}>Paris</span>, and 
                <span style={{ color: 'darkred', fontWeight: 'bold' }}>Tokyo</span>.
            </p>
        </main>
    );
}

export default MainContent;
