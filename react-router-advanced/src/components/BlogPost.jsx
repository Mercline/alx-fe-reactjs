// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Extract the dynamic parameter from the URL
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>This is the content for post with ID: {postId}</p>
    </div>
  );
};

export default BlogPost;
