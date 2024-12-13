import axios from 'axios';

// Fetch user data from GitHub API
const fetchUserData = async (username) => {
  try {
    // Send GET request to GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // Return the user data if successful
    return response.data;
  } catch (error) {
    // Handle error: If user is not found, return a custom error message
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we can't find the user");
    } else {
      // If any other error occurs, throw a general error
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};

export { fetchUserData };
