import axios from 'axios';

// Explicitly specify the GitHub API search endpoint with q parameter as part of the base URL
const BASE_URL = 'https://api.github.com/search/users?q=';  // Updated base URL to include 'q='

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

    // Construct the full URL by appending the query string to the base URL
    const url = `${BASE_URL}${query}&page=${page}&per_page=10`; // Explicitly using the updated base URL with 'q='

    console.log('Request URL:', url); // Log the request URL for debugging

    // Make the GET request to GitHub API with the constructed URL
    const response = await axios.get(url);

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
