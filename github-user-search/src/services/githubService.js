// src/services/githubService.js

const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `in:login ${username ? `+${username}` : ''}`;
    
    // Add additional filters if provided
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    
    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export { searchUsers };
