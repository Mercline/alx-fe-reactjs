// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the hook to check authentication

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to home if not authenticated
  }

  return children; // Return children components if authenticated
}

export default ProtectedRoute;
