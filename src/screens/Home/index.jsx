import React, { useEffect } from "react";
import ClinicList from "../../components/ClinicList";
import { getProfile } from "../../Api/api";
import "./Home.css";

import { Link } from "react-router-dom";
export default function Home(props) {
  const { list, profile, clientId, getProfileCall } = props;
  // const { firstname, lastname, email, id, dsc, title } = profile;
  useEffect(() => {
    getProfileCall();
  }, []);
  // if (!profile) return <div>Loading</div>;
  return (
    <div className="home_page">
      {/* {list && <div>{list[0].firstname}</div>} */}
      {/* {profile && (
        <Link to={`/profile/${id}/${firstname}-${lastname}`}>My Profile</Link>
      )} */}
      {list && <ClinicList list={list} />}
    </div>
  );
}
