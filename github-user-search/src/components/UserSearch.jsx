import React, { useState } from 'react';
import { getUser } from '../services/githubApi';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return; // Prevent empty search

    setLoading(true);     // Start loading
    setError(null);       // Clear previous error
    setUserData(null);    // Reset user data

    try {
      // Fetch user data from GitHub API
      const data = await getUser(username);
      setUserData(data);
      setError(null); // Clear any previous errors if user is found
    } catch (err) {
      setUserData(null);
      // Check if the error is a 404 (user not found)
      if (err.response && err.response.status === 404) {
        setError("Looks like we can't find the user"); // User not found
      } else {
        setError("Something went wrong. Please try again later."); // Generic error message
      }
    } finally {
      setLoading(false); // Set loading to false after the API call
    }
  };

  return (
    <div>
      <h2>Search GitHub User</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}

      {userData && (
        <div>
          <h3>{userData.name || userData.login}</h3> {/* Display user name or login */}
          <p>{userData.bio}</p> {/* Display bio */}
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

export default UserSearch;
