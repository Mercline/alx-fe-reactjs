import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Handle the loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle the error state
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {/* Button to trigger a manual refetch */}
      <button onClick={refetch}>Refresh</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
