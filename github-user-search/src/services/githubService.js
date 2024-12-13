// src/services/githubService.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // Base URL for GitHub API
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to search users with dynamic filters
const searchUsers = async ({ username, location, minRepos, type, language, page = 1, perPage = 10 }) => {
  let query = '';
  if (username) query += `in:login ${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;
  if (type) query += `+type:${type}`;
  if (language) query += `+language:${language}`;

  const searchUrl = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`;
  const data = await get(searchUrl);
  
  return data.items;
};

export { searchUsers };
