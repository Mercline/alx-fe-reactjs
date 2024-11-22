import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams(); // Extract dynamic post ID from URL

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>This is a detailed blog post for post {postId}</p>
    </div>
  );
};

export default BlogPost;
