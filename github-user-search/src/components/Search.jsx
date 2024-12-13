// src/components/Search.jsx

import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';  // Import the correct function

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [type, setType] = useState('');  // user or org
  const [language, setLanguage] = useState('');
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    setLoading(true);
    setError(null);  // Clear any previous errors

    try {
      // Call the searchUsers function from githubService with the filters
      const data = await searchUsers({
        username,
        location,
        minRepos,
        type,
        language,
        page: 1,  // You can handle pagination later
        perPage: 10  // Results per page
      });

      setUserData(data);  // Store the fetched user data
    } catch (err) {
      setUserData([]);  // Reset user data on error
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Search GitHub Users</h1>

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

        {/* User Type (user or org) */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">User Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Any Type</option>
            <option value="user">User</option>
            <option value="org">Organization</option>
          </select>
        </div>

        {/* Language Input */}
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Primary Language</label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter programming language"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {/* Display search results */}
      <div>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="mt-4">
          {userData.map((user) => (
            <li key={user.id} className="p-2 border-b">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
