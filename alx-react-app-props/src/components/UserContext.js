// src/UserContext.js
import { createContext } from 'react';

// Create a context with a default value for userData
const UserContext = createContext({
    userData: {
        name: 'Guest',
        age: null,
        bio: ''
    },
    setUserData: () => {} // Placeholder function for setting user data
});

export default UserContext;
