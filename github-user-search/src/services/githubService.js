import axios from 'axios';

// Define the GitHub Search API URL
const GITHUB_API_URL = 'https://api.github.com/search/users?q=';

// Function to fetch user data based on search criteria
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string for the search
    let query = `${username}`;

    // Add location filter if available
    if (location) {
      query += `+location:${location}`;
    }

    // Add minimum repositories filter if specified
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Build the complete URL
    const url = `${GITHUB_API_URL}${query}`;

    // Make the GET request to GitHub's search API
    const response = await axios.get(url);

    // Return the data (users found)
    return response.data;
  } catch (error) {
    // Log and throw an error if the request fails
    console.error('Error fetching data from GitHub API:', error);
    throw new Error('Error fetching user data');
  }
};
