const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  // Construct the search query
  let query = `q=${username}`;
  
  if (location) query += `+location:${location}`;
  if (minRepos > 0) query += `+repos:>=${minRepos}`;

  // Create the URL with query parameters
  const url = `${BASE_URL}?${query}&per_page=10`; // 10 results per page, can be adjusted
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;  // Return the fetched data
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
