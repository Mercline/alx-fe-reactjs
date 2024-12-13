import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState([]);
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
    setUserData([]);      // Reset user data before fetching new data

    try {
      // Fetch user data from GitHub API with advanced search
      const data = await fetchUserData({ username, location, minRepos, page });
      setUserData(data.items);  // Store the list of users in state
    } catch (err) {
      // Set the specific error message if user is not found
      setError(err.message || "Looks like we can't find the user");
    } finally {
      setLoading(false);  // Set loading to false once API call is complete
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub Users</h2>
      
      {/* Add form for username, location, minRepos, and pagination */}
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
          onChange={(e) => setMinRepos(Number(e.target.value))}
          placeholder="Min Repositories (optional)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display user data if available */}
      {userData && userData.length > 0 ? (
        <div className="user-info">
          {userData.map((user) => (
            <div key={user.id} className="user-item">
              <h3>{user.login}</h3> {/* Display username (login) */}
              <p>{user.bio || 'No bio available'}</p> {/* Display bio */}
              <img src={user.avatar_url} alt="Avatar" width={100} />
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No users found. Please try another search.</p>
      )}
    </div>
  );
}

export default Search;
