import React from 'react';
import './Post.css'; // Import the CSS file

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-author">{post.author}</div>
        <div className="post-date">{new Date(post.createdAt).toLocaleDateString()}</div>
      </div>
      <div className="post-body">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;