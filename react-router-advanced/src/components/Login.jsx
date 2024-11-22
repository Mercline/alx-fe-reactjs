// src/components/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication
    onLogin();
    navigate('/profile'); // Redirect to the profile page after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
