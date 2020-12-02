import React, { useEffect, useState } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Clinic from "../screens/Clinic";
import { getDocList } from "../Api/api";
import "./App.css";

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    getDocList(setList);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home list={list} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/clinic">
            <Clinic />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
