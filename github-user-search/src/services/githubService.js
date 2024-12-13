import axios from 'axios';

// Base URL for GitHub API search endpoint
const BASE_URL = 'https://api.github.com/search/users';

// Function to fetch user data based on advanced search criteria (username, location, minRepos)
export const fetchUserData = async ({ username, location = '', minRepos = 0, page = 1 }) => {
  try {
    // Construct the query string with advanced search parameters
    let query = username ? `${username}` : ''; // Start with username
    if (location) query += ` location:${location}`; // Add location if provided
    if (minRepos > 0) query += ` repos:>=${minRepos}`; // Add minimum repos if provided

    // Ensure query is not empty, otherwise throw an error
    if (!query) {
      throw new Error('Search query must contain a username');
    }

    console.log('Constructed query:', query); // Log query for debugging

    // Make the GET request to GitHub API with query parameters and pagination
    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=10`);

    console.log('API Response:', response.data); // Log the API response for debugging

    // If no users are found, throw an error with a custom message
    if (response.data.items.length === 0) {
      throw new Error('No users found matching your criteria.');
    }

    // Return the full response with users and pagination info
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // Throw a more specific error message with the response or a fallback error
    throw new Error(error.response?.data?.message || error.message || "Unable to fetch user data");
  }
};
