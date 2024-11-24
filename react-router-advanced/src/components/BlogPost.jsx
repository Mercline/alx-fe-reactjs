// src/pages/BlogPost.jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Extract the 'id' from the URL
  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* Fetch and display the blog post content here based on the 'id' */}
    </div>
  );
}

export default BlogPost;
