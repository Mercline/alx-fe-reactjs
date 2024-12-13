// src/services/githubApi.js
import axios from 'axios';

// The API URL and optional API key
const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Function to get user data from GitHub API
const getUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`, // Optional if you're using authentication
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getUser };
