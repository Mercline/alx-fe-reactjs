import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }

    setLoading(true);     // Start loading
    setError(null);       // Clear any previous errors
    setUserData(null);    // Reset user data before fetching new data

    try {
      // Fetch user data from GitHub API with advanced search
      const data = await fetchUserData({ username });
      setUserData(data.items[0]);  // Store the first user in state
    } catch (err) {
      setUserData(null); // Reset user data on error

      // EXACT LINE YOU ASKED FOR: Add this line for the specific error message
      if (err.message === 'No users found matching your criteria.') {
        setError("Looks like we can't find the user"); // This is the message you requested
      } else {
        // Display any other errors that occur
        setError(err.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);  // Set loading to false once API call is complete
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub User</h2>
      
      {/* Add form for username */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display loading message while fetching data */}
      {loading && <p>Loading...</p>}

      {/* Display user data if available */}
      {userData && (
        <div className="user-info">
          <h3>{userData.login}</h3> {/* Display username (login) */}
          <p>{userData.name || 'No name available'}</p> {/* Display name */}
          <p>{userData.bio || 'No bio available'}</p> {/* Display bio */}
          <img src={userData.avatar_url} alt="Avatar" width={100} />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
