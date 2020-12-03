import React, { useEffect } from "react";
import "./Profile.css";

export default function Profile(props) {
  const { firstname, lastname, email, imgUrl, title, dsc } = props.dataObj;

  useEffect(() => {}, []);

  return (
    <div className="profile">
      <div className="left-info">
        <img src={imgUrl} id="profile-img" alt="profilepic"></img>
        <h2>First Name: {firstname}</h2>
        <h2>Last Name: {lastname}</h2>
        <h2>Email: {email}</h2>
      </div>
      {title && dsc && (
        <div className="info2">
          <p>
            <h2>Title</h2>
            {title}
          </p>
          <p>
            <h2>About</h2>
            {dsc}
          </p>
        </div>
      )}
    </div>
  );
}
