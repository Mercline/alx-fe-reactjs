import React, { useState } from 'react';
import { getUser } from '../services/githubApi';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    try {
      const data = await getUser(username);
      setUserData(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setUserData(null);
      setError('User not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt="avatar" width={100} />
        </div>
      )}
    </div>
  );
}

export default UserSearch;
