import React, { useEffect } from "react";
import "./Profile.css";

export default function Profile(props) {
  const [userProfile, setUserProfile] = React.useState(null);
  const { profile } = props;

  function getlocalprofile() {
    const localProfile = JSON.parse(localStorage.getItem("userprofile"));
    setUserProfile(localProfile);
  }

  const {
    firstname,
    lastname,
    email,
    imgUrl,
    title,
    dsc,
    appointments,
  } = JSON.parse(localStorage.getItem("userprofile"));

  useEffect(() => {
    getlocalprofile();
  }, []);

  if (!userProfile) return <div>loading..</div>;

  return (
    <div className="profile">
      <div className="left-info">
        <img src={imgUrl} id="profile-img" alt="profilepic"></img>
        <h2>First Name: {firstname}</h2>
        <h2>Last Name: {lastname}</h2>
        <h2>Email: {email}</h2>
      </div>
      <div>
        {appointments && (
          <ul>
            {appointments.map((app) => (
              <li>
                Day: {app.day}, Hour: {app.hour}:00
              </li>
            ))}
          </ul>
        )}
      </div>
      {title && dsc && (
        <div className="info2">
          <p>
            <h2>Title</h2>
            {profile.title}
          </p>
          <p>
            <h2>About</h2>
            {profile.dsc}
          </p>
        </div>
      )}
    </div>
  );
}
