// MainContent.jsx
import React from 'react';

function MainContent() {
    return (
        <main style={{ 
            padding: '30px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '12px', 
            margin: '20px auto', 
            maxWidth: '700px', 
            textAlign: 'center', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            fontFamily: 'Arial, sans-serif'
        }}>
            <p style={{ 
                fontSize: '20px', 
                color: '#333', 
                lineHeight: '1.6', 
                marginBottom: '20px' 
            }}>
                I love to visit 
                <span style={{ color: 'navy', fontWeight: 'bold', fontSize: '22px' }}> New York</span>, 
                <span style={{ color: 'darkorange', fontWeight: 'bold', fontSize: '22px' }}> Paris</span>, and 
                <span style={{ color: 'darkred', fontWeight: 'bold', fontSize: '22px' }}> Tokyo</span>.
            </p>
            <p style={{ fontSize: '16px', color: '#666', fontStyle: 'italic' }}>
                Traveling opens my mind and fills my soul with unforgettable memories.
            </p>
        </main>
    );
}

export default MainContent;
