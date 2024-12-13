import axios from 'axios';

// Fetch user data from GitHub API
const fetchUserData = async (username) => {
  try {
    // Send GET request to GitHub API
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // Return the user data if successful
    return response.data;
  } catch (error) {
    // Handle error: If user is not found (404 error), throw a specific message
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we can't find the user"); // Custom message for 404
    } else {
      // For any other error, throw a general error message
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};

export { fetchUserData };
