// src/UserContext.js
import { createContext } from 'react';

// Create the UserContext
const UserContext = createContext({
    userData: {
        name: 'Guest',
        age: null,
        bio: '',
    },
    setUserData: () => {}, // Placeholder function for setting user data
});

export default UserContext;
