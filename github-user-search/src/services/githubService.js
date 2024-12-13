import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Throw the specific error for a user not found
      throw new Error("Looks like we can't find the user");
    } else {
      // Throw a generic error for other issues
      throw new Error("Something went wrong. Please try again later.");
    }
  }
};

export { fetchUserData };
