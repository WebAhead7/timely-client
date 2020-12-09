import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userprofile = JSON.parse(localStorage.getItem("userprofile"));
  const { firstname, lastname } = userprofile || {
    firstname: "user",
    lastname: "020",
  };
  return (
    <nav>
      {userprofile && (
        <h3 className="nav-name">
          Hi {firstname} {lastname} 👋
        </h3>
      )}
      <Link className="link" to="/">
        <button>Home</button>
      </Link>
      <Link className="link" to="">
        <button>About Us</button>
      </Link>
      <Link className="link" to="">
        <button>Contact Us</button>
      </Link>
      <Link className="link" to="/login">
        <button>Sign In</button>
      </Link>
      <Link className="link" to="/profile"></Link>
      <Link id="logout" to="/" className="link">
        <button>Logout</button>
      </Link>
    </nav>
  );
}
