import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');  // New state for location
  const [minRepos, setMinRepos] = useState('');  // New state for min repos
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission (page reload)
    setLoading(true);     // Start loading
    setError(null);       // Clear any previous errors
    setUserData(null);    // Reset user data

    try {
      // Fetch user data from GitHub API with additional parameters
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);  // Store user data in state
    } catch (err) {
      // Set the specific error message if user is not found
      setError("Looks like we can't find the user"); // Display user not found message
    } finally {
      setLoading(false);  // Set loading to false once API call is complete
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub User</h2>
      
      {/* Add form and onSubmit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repositories (optional)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      {userData && (
        <div className="user-info">
          <h3>{userData.login}</h3> {/* Display username (login) */}
          <p>{userData.bio}</p> {/* Display bio */}
          <img src={userData.avatar_url} alt="Avatar" width={100} />
          <p>Location: {userData.location || 'N/A'}</p> {/* Display location */}
          <p>Repositories: {userData.public_repos}</p> {/* Display number of repositories */}
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
