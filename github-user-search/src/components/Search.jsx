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
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors
    setUserData(null); // Reset user data

    try {
      // Fetch user data from GitHub API with advanced search criteria
      const data = await fetchUserData({ username, location, minRepos });

      // If no users are found, set an appropriate error message
      if (!data.items || data.items.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUserData(data); // Store user data in state
      }
    } catch (err) {
      // Handle the error from the API call (e.g., network error)
      setError("An error occurred while fetching user data");
    } finally {
      setLoading(false); // Set loading to false once the API call is complete
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Search GitHub Users</h2>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Location input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location (optional)
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Minimum Repositories input */}
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
            Minimum Repositories (optional)
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(Number(e.target.value))}
            placeholder="Enter minimum repositories"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Display error message */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display user data */}
      {userData && userData.items && userData.items.length > 0 ? (
        <div className="user-info grid grid-cols-1 gap-6 mt-6">
          {userData.items.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold">{user.login}</h3>
              </div>
              <p>{user.bio || 'No bio available'}</p>
              <div className="mt-2">
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
      ) : (
        !loading && <p className="text-center text-gray-600">No users found. Please try another search.</p>
      )}
    </div>
  );
}

export default Search;
