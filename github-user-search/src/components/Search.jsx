// src/components/Search.jsx

import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';  // Import both functions

function Search() {
  // State hooks to store user input and results
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');  // Add location state
  const [userData, setUserData] = useState(null);  // This will hold the data for a specific user
  const [userList, setUserList] = useState([]);  // This will hold the list of users from search results
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission for searching users
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Pass the location along with other search parameters
      const data = await searchUsers({ username, location, page: 1, perPage: 10 });
      setUserList(data);  // Set the list of users based on search
      setUserData(null);   // Reset the specific user data
    } catch (err) {
      setUserList([]);  // Reset user list on error
      setError('An error occurred while searching users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle fetching data for a specific user
  const handleFetchUserData = async () => {
    if (!username) {
      setError('Please enter a username.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);  // Fetch data for the specific user
      if (data.message === 'Not Found') {
        setError("Looks like we can't find the user");
        setUserData(null);
      } else {
        setUserData(data);  // Set the specific user data
        setUserList([]);    // Reset the user list
      }
    } catch (err) {
      setUserData(null);  // Reset user data on error
      setError('User not found or an error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Search GitHub Users</h1>

      {/* Form to search users */}
      <form onSubmit={handleSearch} className="space-y-4">
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

        {/* Location input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {/* Button to fetch specific user data */}
      <div className="mt-4">
        <button
          onClick={handleFetchUserData}
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          disabled={loading || !username}
        >
          {loading ? 'Loading User...' : 'Fetch User Data'}
        </button>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display specific user data if available */}
      {userData && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p>{userData.bio}</p>
          <div className="flex items-center">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View Profile
            </a>
          </div>
        </div>
      )}

      {/* Display search results (list of users) */}
      {userList.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <ul>
            {userList.map((user) => (
              <li key={user.id} className="p-2 border-b">
                <div className="flex items-center">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    {user.login}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
