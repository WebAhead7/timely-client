import React, { useState, useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Navbar from "../components/Navbar";
import "./App.css";
import Clinic from "../screens/Clinic";
import { getDocList } from "../Api/api";
import { useHistory } from "react-router-dom";

function App() {
  const [sucsess, setSucsess] = useState(false);
  const [list, setList] = useState(null);
  const [profile, setProfile] = useState(null);
  const [logSucsess, setLogSucsess] = useState(false);

  console.log(sucsess);

  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  useEffect(() => {
    getDocList(setList);
    // getProfile(userId, setProfile);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {sucsess ? (
              <Home list={list} profile={profile} setProfile={setProfile} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/signup">
            <Signup setSucsess={setSucsess} />
          </Route>

          <Route path="/login">
            {sucsess ? (
              <Redirect to="/" />
            ) : (
              <Login setLogSucsess={setLogSucsess} />
            )}
          </Route>

          <Route
            path="/clinic/:id/:docname/:title"
            component={(props) => <Clinic {...props} />}
          />
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
