import React from "react";
import "./styles/comment.css";
import logo from "../logo.svg";

function Comment({ comment }) {
  return (
    <div id="comment-container">
      <div className="parent">
        <img src={logo} height="80px" width="80px" />
        <div className="child">
          <h2 id="title-comment">{comment.name}</h2>
          <h3>{comment.email} </h3>
        </div>
      </div>
      <p>{comment.body} </p>
    </div>
  );
}

export default Comment;
