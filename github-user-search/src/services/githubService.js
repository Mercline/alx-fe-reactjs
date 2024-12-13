import axios from 'axios';

// Function to fetch user data based on username, location, and minRepos
export const fetchUserData = async ({ username, location, minRepos }) => {
  const query = `q=${username ? `+user:${username}` : ''} ${location ? `+location:${location}` : ''} ${minRepos ? `+repos:>=${minRepos}` : ''}&per_page=10`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Looks like we can't find the user");
  }
};
