// src/services/githubService.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',  // Base URL for GitHub API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to make GET requests
const get = async (url) => {
  try {
    const response = await api.get(url);  // Making the GET request
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;  // Throw the error if any
  }
};

// Function to search GitHub users with username, location, and minimum repositories
const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';  // Initialize the query string

    // Dynamically build the query string based on input parameters
    if (username) query += `in:login ${username}`;  // Search by username
    if (location) query += `+location:${location}`;  // Filter by location
    if (minRepos) query += `+repos:>=${minRepos}`;  // Filter by minimum repositories

    // Construct the full URL for the search request
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=10`;

    // Call GitHub's search API endpoint to fetch the users
    const data = await get(searchUrl);
    
    // Return the list of users that match the search criteria
    return data.items;  
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;  // Throw the error if any occurs
  }
};

export { searchUsers };  // Export the searchUsers function for use in components
