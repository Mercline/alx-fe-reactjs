import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  // Construct the query
  let query = `q=${username}`;

  // Add location filter if provided
  if (location) query += `+location:${location}`;

  // Add minimum repositories filter if provided
  if (minRepos > 0) query += `+repos:>=${minRepos}`;

  // Prepare the full URL with the query string
  const url = `${BASE_URL}?${query}&per_page=10`; // Limiting to 10 results per page

  try {
    // Make the GET request using Axios
    const response = await axios.get(url);

    // Return the data (users matching the search)
    return response.data;
  } catch (error) {
    // Handle any error that occurs during the request
    throw new Error('Error fetching data from GitHub API');
  }
};
