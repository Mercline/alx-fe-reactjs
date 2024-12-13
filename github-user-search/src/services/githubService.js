import axios from 'axios';

// Base URL for GitHub API search endpoint
const BASE_URL = 'https://api.github.com/search/users';

// Function to fetch user data based on advanced search criteria (username, location, minRepos)
export const fetchUserData = async ({ username, location = '', minRepos = 0 }) => {
  try {
    // Construct the query string with advanced search parameters
    let query = `user:${username}`; // Start with username
    if (location) query += ` location:${location}`; // Add location if provided
    if (minRepos > 0) query += ` repos:>=${minRepos}`; // Add minimum repos if provided

    // Make a GET request to the GitHub API search endpoint
    const response = await axios.get(`${BASE_URL}?q=${query}&per_page=10`);
    
    return response.data.items; // Return the array of users matching the query
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error("Looks like we can't find the user");
  }
};
