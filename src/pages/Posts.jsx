import React, { useEffect, useState } from "react";
import "../styles/Posts.css";
import Post_card from "../components/Post_card";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postsFetch =await res.json()
     setPosts(() => postsFetch);
    }
    fetchData()
    },[]);

  return (
    <div id="Posts-container">
      <h1 id="post-title">All Posts</h1>
      <div className="posts-grid">
        {posts.map((data) => {
          return <Post_card post={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
