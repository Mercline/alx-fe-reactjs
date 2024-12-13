import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Search GitHub Users</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="p-2 w-full border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <input
          type="text"
          className="p-2 w-full border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
        />
        <input
          type="number"
          className="p-2 w-full border border-gray-300 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="user-info mt-4">
        {userData && userData.map((user) => (
          <div key={user.login} className="border-b border-gray-300 py-4">
            <h3 className="text-xl font-semibold">{user.login}</h3>
            <p>{user.bio}</p>
            <p><strong>Location:</strong> {user.location || 'N/A'}</p>
            <p><strong>Public Repositories:</strong> {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
