// src/services/githubService.js

import axios from 'axios';

// Base URL for GitHub API
const GITHUB_API_URL = 'https://api.github.com';

// Axios instance to configure common settings (e.g., base URL)
const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// General GET function to fetch data from GitHub
const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to fetch user data by username (e.g., /users/{username})
const fetchUserData = async (username) => {
  try {
    const data = await get(`/users/${username}`);
    return data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Function to search users with multiple query parameters (username, location, minRepos)
const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';

    // Construct the search query based on provided parameters
    if (username) {
      query += `in:login ${username}`;
    }
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // The final search query is appended to the endpoint
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=10`;

    // Perform the GET request using the constructed search URL
    const data = await get(searchUrl);
    
    // Return the list of users found in the search
    return data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

// Export functions to be used in other parts of the app
export { fetchUserData, searchUsers };
