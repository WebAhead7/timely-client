import "./App.css";
import React, { useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";


function App() {
  return (
  <div className="App">
<BrowserRouter>
<Navbar /> 
<Switch>
<Route exact path="/">
<Home />
</Route>


</Switch>
</BrowserRouter>
</div>

  )}


export default App;
