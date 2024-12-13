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

// General GET function to fetch data
const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to fetch user data (using the username or search criteria)
const fetchUserData = async (username) => {
  try {
    const data = await get(`/users/${username}`);
    return data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Function to search users with multiple criteria (location, minimum repos, etc.)
const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = `in:login ${username ? username : ''}`;
    
    // Append additional filters to the query if provided
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const data = await get(`/search/users?q=${query}`);
    return data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export { fetchUserData, searchUsers };
