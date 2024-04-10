import React, { useState } from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user=true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg" alt="" />
          <span>ReaL-EstatE</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {
          user ? (
          <div className="user">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
            <span>Mr. Bean</span>
            <Link to="/profile" className=".profile">Profile</Link>
            {/* <div className="notification">5</div> */}
          </div>
        ) 
        :
         (<><a href="/login">Sign in</a>
          <a href="/register" className="register">
            Sign up
          </a>
          </>) 
        }
            
        <div className="menuIcon">
          <img src="/Real-Estae/public/hamburger.png" alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;