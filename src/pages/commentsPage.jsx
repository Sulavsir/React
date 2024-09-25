import React, { useEffect, useState } from "react";
import "../components/styles/commentPage.css";
import Comment from "../components/comment";

function Comments() {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(async (data) => {
        const comment = await data.json();
        setAllComments(() => comment);
        console.log(data);
      })
  }, []);
  return (
    <div id="comments">
      <h1 id="title">All comments</h1>
      <div className="comments-grid">
        {allComments.map((data) => {
          return <Comment comment={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default Comments;
