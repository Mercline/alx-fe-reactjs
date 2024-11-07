// src/App.jsx
import React, { useState } from 'react';
import UserContext from './UserContext'; // Import the UserContext
import UserProfile from './components/UserProfile'; // Import UserProfile

function App() {
    // Initialize user data state
    const [userData, setUserData] = useState({
        name: 'Alice',
        age: 25,
        bio: 'Loves hiking and photography',
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {/* UserProfile now consumes userData from UserContext */}
            <UserProfile />
        </UserContext.Provider>
    );
}

export default App;
