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
          Hi{" "}
          <Link className="full-name" to="/profile">
            {firstname} {lastname}
          </Link>
          👋
        </h3>
      )}
      <Link className="link" to="/">
        <button>Home</button>
      </Link>
      <Link className="link" to="/about">
        <button>About Us</button>
      </Link>
      <Link className="link" to="/contact">
        <button>Contact Us</button>
      </Link>
      <Link className="link" to="/profile"></Link>
      <Link id="logout" to="/" className="link">
        <button>Logout</button>
      </Link>
    </nav>
  );
}
