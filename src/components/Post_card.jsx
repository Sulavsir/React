import React from "react";
import "./styles/posts-card.css";

function Post_card({ post }) {
  return (
    <div className="posts-card">
      <div className="posts-id">{post.id}.</div>
      <div className="posts-details">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post_card;
