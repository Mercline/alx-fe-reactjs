// src/components/UserSearch.jsx

import React, { useState } from 'react';
import { searchUsers } from '../services/githubApi'; // Assuming you modify the API service for advanced search

function UserSearch() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username && !location && !minRepos) {
      setError("Please provide at least one search criterion");
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      // Fetch user data from the GitHub API (you'll need to modify this function to handle advanced queries)
      const data = await searchUsers({ username, location, minRepos });
      setUserData(data);
    } catch (err) {
      setUserData(null); // Reset user data on error

      if (err.message === 'User not found') {
        setError("Looks like we can't find the user");
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Search GitHub Users</h1>
      <div className="space-y-4">
        {/* Username Search Field */}
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

        {/* Location Search Field */}
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

        {/* Minimum Repositories Search Field */}
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
          onClick={handleSearch}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}

      {/* Display User Data */}
      {userData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{userData.login}</h2>
          {userData.name && <p className="text-md text-gray-800">{userData.name}</p>}
          {userData.bio && <p className="mt-2 text-sm text-gray-600">{userData.bio}</p>}
          {userData.location && <p className="mt-2 text-sm text-gray-600">Location: {userData.location}</p>}
          <p className="mt-2 text-sm text-gray-600">Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
