import React, { useState, useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Profile from "../screens/Profile";
import Navbar from "../components/Navbar";
import "./App.css";
import Clinic from "../screens/Clinic";
import { getDocList } from "../Api/api";

function App() {
  const [sucsess, setSucsess] = useState(false);
  const [logSucsess, setLogSucsess] = useState(false);
  const [list, setList] = useState(null);
  const [islogin, setLogin] = useState(true);

  useEffect(() => {
    getDocList(setList);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            {sucsess ? <Home /> : <Signup setSucsess={setSucsess} />}
          </Route>

          <Route path="/login">
            {sucsess ? (
              <Home list={list} />
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
