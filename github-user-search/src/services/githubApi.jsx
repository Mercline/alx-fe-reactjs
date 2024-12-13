// githubApi.js

const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = `in:login ${username ? username : ''}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`);
    
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
