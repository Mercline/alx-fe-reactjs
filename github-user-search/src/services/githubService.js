// src/services/githubService.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to make GET requests
const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to search GitHub users with username, location, and minimum repositories
const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';

    // Add filters based on the provided parameters
    if (username) query += `in:login ${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // Construct the full URL for the search request
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=10`;

    const data = await get(searchUrl);

    return data.items; // Return the list of users that match the search criteria
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};

// Export the search function to be used in the component
export { searchUsers };
