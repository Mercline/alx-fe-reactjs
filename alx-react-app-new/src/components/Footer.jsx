// Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            textAlign: 'center',
            padding: '15px',
            marginTop: '20px',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <p style={{
                fontSize: '16px',
                margin: '0',
                fontWeight: 'normal',
                letterSpacing: '1px'
            }}>
                © 2023 City Lovers
            </p>
        </footer>
    );
}

export default Footer;
