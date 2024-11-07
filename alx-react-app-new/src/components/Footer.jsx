// Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer style={{ 
            backgroundColor: '#333', 
            color: 'white', 
            textAlign: 'center', 
            padding: '20px', 
            marginTop: '30px', 
            borderRadius: '10px', 
            boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', 
            fontFamily: 'Arial, sans-serif'
        }}>
            <p style={{ 
                fontSize: '18px', 
                margin: '0', 
                fontWeight: 'normal', 
                letterSpacing: '1px' 
            }}>
                © 2023 City Lovers
            </p>
            <div style={{ marginTop: '10px' }}>
                <a href="https://twitter.com" style={{
                    color: '#1DA1F2', 
                    textDecoration: 'none', 
                    fontSize: '20px', 
                    marginRight: '15px'
                }}>Twitter</a>
                <a href="https://facebook.com" style={{
                    color: '#4267B2', 
                    textDecoration: 'none', 
                    fontSize: '20px', 
                    marginRight: '15px'
                }}>Facebook</a>
                <a href="https://instagram.com" style={{
                    color: '#C13584', 
                    textDecoration: 'none', 
                    fontSize: '20px'
                }}>Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
