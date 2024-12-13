// src/components/UserSearch.jsx (or Search.jsx, depending on your naming)

import React, { useState } from 'react';
import { searchUsers } from '../services/githubService'; // Ensure the correct import path

function Search() {  // Or use "UserSearch" if that's the name you prefer
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    if (!username && !location && !minRepos) {
      setError('Please provide at least one search criterion');
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const data = await searchUsers({ username, location, minRepos });
      setUserData(data); // Store the search results
    } catch (err) {
      setUserData([]); // Reset user data on error
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Search GitHub Users</h1>
      
      {/* Form element with onSubmit */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub username"
          />
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>

        {/* Minimum Repositories Input */}
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter minimum number of repositories"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"  // The button is now part of the form and will trigger the form submission
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Display error if any */}
      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      {/* Display search results */}
      {userData.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <ul className="space-y-4">
            {userData.map((user) => (
              <li key={user.id} className="flex items-center space-x-4">
                <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{user.login}</h3>
                  <p className="text-sm text-gray-600">{user.type}</p>
                  <p className="text-sm text-gray-600">Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;  // Or export default UserSearch if you're using that name
