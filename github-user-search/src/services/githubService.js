// src/services/githubService.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // Base URL for GitHub API
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

// Function to search GitHub users with multiple query parameters (advanced search)
const searchUsers = async ({ username, location, minRepos, type, language, page = 1, perPage = 10 }) => {
  try {
    let query = '';  // Initialize the query string

    // Build query string based on the passed filters

    if (username) query += `in:login ${username}`;  // Search by username
    if (location) query += `+location:${location}`;  // Filter by location
    if (minRepos) query += `+repos:>=${minRepos}`;  // Filter by minimum repositories
    if (type) query += `+type:${type}`;  // Filter by user type (user, organization)
    if (language) query += `+language:${language}`;  // Filter by primary programming language

    // Construct the full URL for the search request
    const searchUrl = `/search/users?q=${query}&page=${page}&per_page=${perPage}`;

    // Call the GitHub Search API to fetch the users based on the query
    const data = await get(searchUrl);
    
    // Return the list of users that match the search criteria
    return data.items;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;  // Throw the error if any occurs
  }
};

export { searchUsers };  // Export the searchUsers function for use in components
