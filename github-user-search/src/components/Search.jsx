import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className="user-info">
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt="Avatar" width={100} />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
