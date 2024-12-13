import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    setLoading(true);     // Start loading
    setError(null);       // Clear any previous errors
    setUserData(null);    // Reset user data

    try {
      // Fetch user data from GitHub API with advanced search criteria
      const data = await fetchUserData({ username, location, minRepos });
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username">GitHub Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="location">Location (optional)</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="minRepos">Minimum Repositories (optional)</label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(Number(e.target.value))}
            placeholder="Enter minimum repositories"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" disabled={loading} className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      {userData && userData.items && userData.items.length > 0 && (
        <div className="user-info mt-6">
          {userData.items.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm mb-4">
              <div className="flex items-center mb-3">
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold">{user.login}</h3>
              </div>
              <p>{user.bio || 'No bio available'}</p>
              <p className="text-sm text-gray-500">Location: {user.location || 'Not provided'}</p>
              <p className="text-sm text-gray-500">Repositories: {user.public_repos}</p>
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && userData && userData.items && userData.items.length === 0 && (
        <p className="text-center text-gray-600">No users found. Please try another search.</p>
      )}
    </div>
  );
}

export default Search;
