import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logOut } from "./logout";
export default function Navbar(props) {
  const { setSucsess } = props;
  const userprofile = JSON.parse(localStorage.getItem("userprofile"));
  const { firstname, lastname } = userprofile || {
    firstname: "user",
    lastname: "020",
  };

  const onPress = () => {
    setSucsess(false);
    logOut();
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
      <Link id="logout" to="/login" className="link">
        <button onClick={onPress}>Logout</button>
      </Link>
    </nav>
  );
}
