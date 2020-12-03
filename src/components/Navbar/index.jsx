import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header"></div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li id="home">
              <a href="/">HOME</a>
            </li>
            <li id="about">
              <a href="btn btn-success">ABOUT US</a>
            </li>
            <li id="contact us">
              <a href="btn btn-success">CONTACT US</a>
            </li>
            <li id="sign in">
              <a href="btn btn-primary">SIGN IN</a>
            </li>
            <li id="sign up">
              <Link to="btn btn-primary">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
