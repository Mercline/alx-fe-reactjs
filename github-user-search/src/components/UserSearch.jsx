import React, { useState } from 'react';
import { getUser } from '../services/githubApi';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    try {
      // Fetch user data from GitHub API
      const data = await getUser(username);
      setUserData(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setUserData(null); // Reset user data on error

      // Check if the error is related to the user not being found
      if (err.message === 'User not found') {
        setError("Looks like we can't find the user");
      } else {
        // Default error message for other errors
        setError('An error occurred. Please try again.');
      }
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

      {/* Display error message if there's an error */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Display user data if available */}
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
