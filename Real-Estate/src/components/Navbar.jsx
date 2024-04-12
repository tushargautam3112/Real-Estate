import React, { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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

  const {currentUser} = useContext(AuthContext)

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg" alt="" />
          <span>Blissful Abodes</span>
        </a>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {
          currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className=".profile">Profile</Link>
            {/* <div className="notification">5</div> */}
          </div>
        ) 
        :
         (<><a href="/login">Sign in</a>
          <a href="/register" className="register">Sign up</a>
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