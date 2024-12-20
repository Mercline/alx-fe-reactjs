// src/services/githubService.js

import axios from 'axios';

// Initialize axios instance
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to make GET requests
const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to search users with advanced filters
const searchUsers = async ({ username, location, minRepos, type, language, page = 1, perPage = 10 }) => {
  let query = '';
  if (username) query += `in:login ${username}`;  // Search by username
  if (location) query += `+location:${location}`;  // Filter by location
  if (minRepos) query += `+repos:>=${minRepos}`;  // Minimum repositories
  if (type) query += `+type:${type}`;  // User or organization
  if (language) query += `+language:${language}`;  // Filter by programming language

  // Construct the search URL
  const searchUrl = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`;
  const data = await get(searchUrl);
  return data.items;  // Return the list of users
};

// Function to fetch data for a specific user
const fetchUserData = async (username) => {
  try {
    const userData = await get(`/users/${username}`);
    return userData;  // Return the user data
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');  // Throw an error if the user is not found
    }
    throw new Error('An error occurred while fetching user data');
  }
};

export { searchUsers, fetchUserData };
