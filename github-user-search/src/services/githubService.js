// githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location = '', minRepos = 0, page = 1 }) => {
  try {
    let query = username ? `${username}` : ''; // Start with username
    if (location) query += ` location:${location}`; // Add location if provided
    if (minRepos > 0) query += ` repos:>=${minRepos}`; // Add minimum repos if provided

    if (!query) {
      throw new Error('Search query must contain a username');
    }

    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=10`);

    if (response.data.items.length === 0) {
      throw new Error('No users found matching your criteria.'); // This is the key message we handle in Search.jsx
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error(error.response?.data?.message || error.message || "Unable to fetch user data");
  }
};
