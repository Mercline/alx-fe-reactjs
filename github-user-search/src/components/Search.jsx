import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    setLoading(true);    // Set loading to true while fetching data
    setError(null);      // Clear any previous errors
    setUserData(null);   // Clear previous user data

    try {
      // Fetch user data from GitHub API
      const data = await fetchUserData(username);
      setUserData(data);  // Store the fetched user data in state
    } catch (err) {
      setError("Looks like we can't find the user");  // Display error if the user is not found
    } finally {
      setLoading(false);  // Set loading to false once the API call is complete
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Search GitHub User</h2>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Handle username input
            placeholder="Enter GitHub username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
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

      {/* Conditional Rendering */}
      {/* Loading State */}
      {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Success State (Display User Data) */}
      {userData && (
        <div className="user-info grid grid-cols-1 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full mr-4"
              />
              <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3> {/* Display user name or login */}
            </div>
            <p>{userData.bio || 'No bio available'}</p>

            <div className="mt-2">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
