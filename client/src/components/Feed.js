import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import Post from './Post';
import './Feed.css'; // Import the CSS file
import { CircularProgress } from '@mui/material'; // Import Material-UI CircularProgress

const generateFakePosts = (num) => {
  const posts = [];
  for (let i = 0; i < num; i++) {
    posts.push({
      _id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      author: faker.person.fullName(),
      createdAt: faker.date.past(),
    });
  }
  return posts;
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate fetching posts with a delay
        setTimeout(() => {
          const fakePosts = generateFakePosts(10);
          setPosts(fakePosts);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError('Failed to fetch posts');
        console.error(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="feed-container">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="feed-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1>Feed</h1>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">Login</Link>
          <Link to="/signup" className="auth-button">Sign Up</Link>
        </div>
      </div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;