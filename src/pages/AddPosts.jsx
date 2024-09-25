import React from "react";
import PostsFormPage from "../components/PostsForm";
import { useState } from "react";

function AddPosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("1");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()=== "" || title.length > 20) {
      alert("Title cannot be empty or length must be lesser than 20");
      return;
    }
    if (body.trim()==="" ||body.length<50) {
      alert("Body cannot be empty and length must be greater than 50");
      return;
    }
    if (userId.trim() === "" || isNaN(userId)) {
      alert("UserId cannot be empty or string");
      return;
    }
    setIsLoading(true)

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setIsLoading(false)
    console.log(title, body, userId, data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Posts Add</h1>
      {
        isLoading && <p>Loading....</p>
      }
      <PostsFormPage
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeBody={(e) => setBody(e.target.value)}
        onChangeUserId={(e) => setUserId(e.target.value)}
      />
    </form>
  );
}

export default AddPosts;
