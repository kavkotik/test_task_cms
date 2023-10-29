import React from "react";
import posts from "../posts.json";

const Posts = () => {
  return (
    <div className="component-wrap posts">
      {posts.map((post) => (
        <div className="post-item">
          <span className="post-img"></span>
          <p className="post-title">{post.title}</p>
          <p className="post-text">{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
