import React from "react";
import "../components/styles/userCard.css";
const UserCards = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-title">
        <h1>{user["name"]}</h1>
        <p>{user["username"]}</p>
      </div>
      <div className="user-info">
        <UserInfo title="Email" value={user["email"]}></UserInfo>
        <UserInfo title="Phone" value={user["phone"]}></UserInfo>
        <UserInfo title="Website" value={user.website}></UserInfo>
      </div>
      <div className="user-address">
        <UserInfo title="Address" value={user.address?.street}></UserInfo>
      </div>
      <div className="user-company">
        <UserInfo title="Company" value={user.company?.name}></UserInfo>
        <UserInfo
          title="Catchphrase"
          value={user.company?.catchPhrase}
        ></UserInfo>
        <UserInfo title="Business" value={user.company?.bs}></UserInfo>
      </div>
    </div>
  );
};
export default UserCards;

const UserInfo = ({ title, value, extra }) => {
  return (
    <p>
      {!extra && <strong>{title}:</strong>}
      {extra && <br />}
      {value}
    </p>
  );
};
