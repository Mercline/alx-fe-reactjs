// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Blog</h2>
      <ul>
        <li>
          <Link to="/post/1">Go to Blog Post 1</Link>
        </li>
        <li>
          <Link to="/post/2">Go to Blog Post 2</Link>
        </li>
        <li>
          <Link to="/post/3">Go to Blog Post 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
