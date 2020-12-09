import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ fullname }) {
  const fullName = window.localStorage.getItem("fullName");
  return (
    <nav>
      {fullName ? <h3 className="nav-name">Hi {fullName} 👋</h3> : null}
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
