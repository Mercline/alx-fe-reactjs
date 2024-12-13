import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    setLoading(true);    // Set loading state to true
    setError(null);      // Clear previous error
    setUserData(null);   // Clear previous user data

    try {
      // Fetch user data from GitHub API using the search term
      const data = await fetchUserData(username);  // Assuming it fetches an array of users
      setUserData(data);  // Store the fetched data in state
    } catch (err) {
      setError("Looks like we can't find the user");  // Display error message
    } finally {
      setLoading(false);  // Set loading state to false after the request completes
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Search GitHub Users</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}  // Update the username as the user types
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

      {/* Conditional rendering for loading state */}
      {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}

      {/* Error message */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display multiple users */}
      {userData && Array.isArray(userData) && (
        <div className="user-info grid grid-cols-1 gap-6 mt-6">
          {userData.map((user) => (
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
      )}
    </div>
  );
}

export default Search;
