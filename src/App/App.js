import React from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

import "./App.css";

function App() {
  
  const [sucsess, setSucsess] = React.useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
          { sucsess? <Home /> :  <Login  setSucsess={setSucsess}/>}  
          </Route>
          <Route path="/signup"> 
          <Signup/>
          </Route>
          <Route path="/login" > 
          <Login setSucsess={setSucsess}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
