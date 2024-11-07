import React, { useState } from 'react';
import UserContext from './UserContext';  // Import UserContext
import UserDetails from './components/UserDetails';  // Import UserDetails component

function App() {
    // Define userData in the state
    const [userData, setUserData] = useState({
        name: 'Alice',
        email: 'alice@example.com',
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {/* Other components can now consume userData */}
            <h1>User Profile</h1>
            <UserDetails />  {/* UserDetails will consume userData from UserContext */}
        </UserContext.Provider>
    );
}

export default App;
