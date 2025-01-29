import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
        <span>By {post.author}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Post;
