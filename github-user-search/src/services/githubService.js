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

    // Ensure the query is properly formatted
    if (!query) {
      throw new Error('Search query must contain a username');
    }

    // Make a GET request to the GitHub API search endpoint with pagination
    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=10`);

    // If no users match the query, return an empty array
    if (response.data.items.length === 0) {
      throw new Error('No users found matching your criteria.');
    }

    // Return the full response with users and pagination info
    return response.data;
  } catch (error) {
    // Handle different error scenarios
    if (error.response) {
      // API responded with an error (e.g., rate limit exceeded, invalid query, etc.)
      if (error.response.status === 403) {
        console.error('Rate limit exceeded. Please try again later.');
      } else {
        console.error('GitHub API error:', error.response.data.message || error.response.statusText);
      }
    } else if (error.request) {
      // Request was made, but no response was received (likely a network issue)
      console.error('Network error or no response from GitHub API');
    } else {
      // Other errors (e.g., invalid query, misconfiguration)
      console.error('Error fetching user data:', error.message);
    }

    // Throw a generic error message that can be caught on the client-side
    throw new Error("Looks like we can't find the user, please try again.");
  }
};
