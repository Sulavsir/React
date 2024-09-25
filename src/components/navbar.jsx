import React, { useState } from "react";
import '../styles/navbar.css';
import logo from "../logo.svg";
import { Link } from "react-router-dom";


function Navbar({ title }) {
  const [menu, setMenu] = useState("");

  return (
    <>
      <div id='nav'>
        <div id='logo'>
          <img src={logo} height={80} width={80} alt='logo' />
          <h1>{title}</h1>
        </div>
        <div id='menus'>
          <Link onClick={() => setMenu("Home")} className={menu === "Home" ? "isActive" : ""} to='/'> <p>Home</p> </Link>
          <Link onClick={() => setMenu("Documents")} className={menu === "Documents" ? "isActive" : ""} to='/documents'> <p>Documents</p> </Link>
          <Link onClick={() => setMenu("Downloads")} className={menu === "Downloads" ? "isActive" : ""} to='/downloads'> <p>Downloads</p> </Link>
          <Link onClick={() => setMenu("Settings")} className={menu === "Settings" ? "isActive" : ""} to='/settings'> <p>Settings</p> </Link>
          <Link onClick={() => setMenu("Profile")} className={menu === "Profile" ? "isActive" : ""} to='/profile'> <p>Profile</p> </Link>
          <Link onClick={() => setMenu("Login")} className={menu === "Login" ? "isActive" : ""} to='/login'> <p>Login</p> </Link>
          <Link onClick={() => setMenu("Register")} className={menu === "Register" ? "isActive" : ""} to='/register'> <p>Register</p> </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
