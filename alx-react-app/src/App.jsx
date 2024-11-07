import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage'; // Import the WelcomeMessage component
import FavoriteCitiesHeader from './FavoriteCitiesHeader'; // Import the FavoriteCitiesHeader component
import FavoriteCities from './FavoriteCities'; // Import the FavoriteCities component
import Header from './Header'; // Import the Header component
import MainContent from './MainContent'; // Import the MainContent component
import Footer from './Footer'; // Import the Footer component
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header /> {/* Include the Header component */}
            <MainContent /> {/* Include the MainContent component */}
            <WelcomeMessage /> {/* Include the WelcomeMessage component */}
            <FavoriteCitiesHeader /> {/* Include the FavoriteCitiesHeader component */}
            <FavoriteCities /> {/* Include the FavoriteCities component */}
            
            {/* Use the UserProfile component with props */}
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />

            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Footer /> {/* Include the Footer component */}
        </>
    );
}

export default App;
