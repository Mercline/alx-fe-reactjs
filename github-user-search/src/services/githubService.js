// src/services/githubService.js

import axios from 'axios';

// Axios instance to make requests to GitHub API
const api = axios.create({
  baseURL: 'https://api.github.com', // Base URL for GitHub API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function for making GET requests
const get = async (url) => {
  try {
    const response = await api.get(url);  // Make the GET request
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Throw error to be handled by the calling code
  }
};

// Function to search users based on advanced search filters
const searchUsers = async ({ username, location, minRepos, type, language, page = 1, perPage = 10 }) => {
  try {
    // Build the query string dynamically based on input filters
    let query = '';
    
    if (username) query += `in:login ${username}`;  // Search by username
    if (location) query += `+location:${location}`;  // Filter by location
    if (minRepos) query += `+repos:>=${minRepos}`;  // Filter by minimum repositories
    if (type) query += `+type:${type}`;  // Filter by user type (user, organization)
    if (language) query += `+language:${language}`;  // Filter by primary language

    // Construct the full search URL with query parameters
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=${perPage}`;

    // Fetch user data from GitHub API using the constructed URL
    const data = await get(searchUrl);
    
    return data.items;  // Return the list of users that match the search query
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;  // Handle error in calling code (like in the component)
  }
};

export { searchUsers };  // Export the searchUsers function
