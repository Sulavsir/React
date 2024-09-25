import React, { useEffect, useState } from "react";
import "../components/styles/users.css";
import UserCards from "../components/userCards";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (data) => {
        const users = await data.json();
        setAllUsers(() => users);
      })
      .catch((e) => console.log(e.err));
  }, []);
  return (
    <div id="users">
      <h1 id="title">All users</h1>
      <div className="user-grid">
        {allUsers.map((data) => {
          return <UserCards user={data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default Users;
