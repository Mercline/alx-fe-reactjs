import axios from 'axios';

// Define the base URL for the GitHub API
const GITHUB_API_URL = 'https://api.github.com/search/users';

// Function to fetch user data based on search criteria
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string for advanced search
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API request to GitHub's search endpoint
    const response = await axios.get(`${GITHUB_API_URL}?${query}`);

    return response.data; // Return the response data (users found)
  } catch (error) {
    // Log and throw an error if something goes wrong
    console.error('Error fetching data from GitHub API:', error);
    throw new Error('Error fetching user data');
  }
};
