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

// Function to make a GET request to the GitHub API
const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
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

// Function to search users with advanced query parameters (username, location, minRepos)
const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Initialize the search query
    let query = '';

    // Add username filter to query if provided
    if (username) {
      query += `in:login ${username}`;
    }
    // Add location filter if provided
    if (location) {
      query += `+location:${location}`;
    }
    // Add minimum repositories filter if provided
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Construct the full search URL using the query
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=10`;

    // Perform the GET request to search users
    const data = await get(searchUrl);

    // Return the list of users that match the search query
    return data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

// Export functions to be used in other parts of the app
export { fetchUserData, searchUsers };
