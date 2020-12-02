import React, { useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
