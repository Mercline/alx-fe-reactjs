import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if the username is provided
    if (!username) {
      setError("Please enter a username.");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    setUserData([]); // Reset user data

    try {
      // Fetch user data based on advanced search criteria
      const data = await fetchUserData({ username, location, minRepos });
      
      if (data.length === 0) {
        setError("Looks like we can't find the user"); // Specific message when no users are found
      } else {
        setUserData(data); // Store user data in state
      }
    } catch (err) {
      setError("Looks like we can't find the user"); // Show the specific error message if any error occurs
    } finally {
      setLoading(false); // Set loading to false once API call is complete
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Search GitHub User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            aria-label="GitHub username"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location (Optional)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            aria-label="Location"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum number of repositories"
            aria-label="Minimum repositories"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>} {/* Error message */}

      {userData.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Results:</h3>
          <div className="space-y-4">
            {userData.map((user) => (
              <div key={user.id} className="p-4 border rounded-lg shadow-md">
                <h4 className="font-bold">{user.login}</h4>
                <p>{user.location || 'No location specified'}</p>
                <p>{user.public_repos} Repositories</p>
                <img src={user.avatar_url} alt="Avatar" width={100} className="rounded-full" />
                <p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {userData.length === 0 && !loading && !error && (
        <p className="mt-4 text-gray-500">No users found matching your criteria.</p>
      )}
    </div>
  );
}

export default Search;
