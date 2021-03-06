import React, { useState, useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Navbar from "../components/Navbar";
import Contact from "../screens/Contact/contact";
import About from "../screens/About/about";
import "./App.css";
import Clinic from "../screens/Clinic";
import { getDocList, getProfile } from "../Api/api";

function App() {
  const [sucsess, setSucsess] = useState(false);
  const [list, setList] = useState(null);
  const [profile, setProfile] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [isDoc, setIsDoc] = useState(null);

  const setLogin = (isLogged, id, isDoc) => {
    setSucsess(isLogged);
    setClientId(id);
    localStorage.setItem("isloggedin", JSON.stringify(isLogged));
    localStorage.setItem("clientId", JSON.stringify(id));
    localStorage.setItem("isDoc", JSON.stringify(isDoc));
  };

  const getLogin = () => {
    const isLoggedin = JSON.parse(localStorage.getItem("isloggedin"));
    const id = JSON.parse(localStorage.getItem("clientId"));
    const isDoc = JSON.parse(localStorage.getItem("isDoc"));

    setSucsess(isLoggedin);
    setClientId(id);
    setIsDoc(isDoc);
  };

  const getProfileCall = () => {
    getProfile(clientId, setProfile);
  };

  useEffect(() => {
    getLogin();
    getDocList(setList);

    if (sucsess) {
      if (clientId) {
        getProfileCall();
        console.log(profile);
      }
    }
  }, [clientId]);

  return (
    <div className="App">
      <BrowserRouter>
        {sucsess && <Navbar setSucsess={setSucsess} />}
        <Switch>
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
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />

          <Route path="/login">
            {sucsess ? <Redirect to="/" /> : <Login setLogin={setLogin} />}
          </Route>
          {sucsess ? (
            <Route
              path="/clinic/:id/:docname/:title"
              component={(props) => (
                <Clinic {...props} clientId={clientId} isDoc={isDoc} />
              )}
            />
          ) : (
            <Redirect to="/login" />
          )}
          <Route path="/profile">
            {sucsess ? <Profile profile={profile} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
