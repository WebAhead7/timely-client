import React, { useState, useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Contact from "../components/Contact";
import About from "../components/About";
import "./App.css";
import Clinic from "../screens/Clinic";
import { getDocList, getProfile } from "../Api/api";

function App() {
  const [sucsess, setSucsess] = useState(false);
  const [list, setList] = useState(null);
  const [profile, setProfile] = useState(null);
  const [clientId, setClientId] = useState(null);

  const setLogin = (isLogged, clientid) => {
    console.log("IN SET LOGIN");
    setSucsess(isLogged);
    setClientId(clientid);
    localStorage.setItem("isloggedin", JSON.stringify(isLogged));
    localStorage.setItem("clientId", JSON.stringify(isLogged));
    console.log(isLogged, clientid);
  };

  const getLogin = () => {
    const isLoggedin = JSON.parse(localStorage.getItem("isloggedin"));
    const id = JSON.parse(localStorage.getItem("clientId"));
    setSucsess(isLoggedin);
    setClientId(id);
  };

  const getProfileCall = () => {
    getProfile(clientId, setProfile);
  };

  useEffect(() => {
    getDocList(setList);
    getLogin();
  }, []);
  return (
    <div className="App">
      <Route exact path="/">
        {sucsess ? (
          <Home
            clientId={clientId}
            list={list}
            profile={profile}
            getProfileCall={getProfileCall}
          />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route path="/signup">
        {sucsess ? <Redirect to="/" /> : <Signup setLogin={setLogin} />}
      </Route>

      <Route path="/login">
        {sucsess ? <Redirect to="/" /> : <Login setLogin={setLogin} />}
      </Route>

      <Route path="/about">{About}</Route>

      <Route path="/contact">{Contact}</Route>

      <Route
        path="/clinic/:id/:docname/:title"
        component={(props) => <Clinic {...props} clientId={clientId} />}
      />
      <Route path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
