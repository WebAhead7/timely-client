import React, { useEffect, useState } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import "./App.css";

import Clinic from "../screens/Clinic";
import { getDocList } from "../Api/api";
import "./App.css";
import React, { useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";


function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    getDocList(setList);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
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
          <Route path="/login">
            {" "}
            <Login />{" "}
          </Route>
          <Route path="/profile">
            <Profile dataObj={clientObj} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const clientObj = {
  firstname: "Muhammad",
  lastname: "Awwad",
  email: "hammode.awad@gmail.com",
  imgUrl:
    "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
};

const doctorObj = {
  firstname: "John",
  lastname: "Steve",
  email: "john_steve@hotmail.com",
  imgUrl:
    "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_535,h_516/https://bestpriceweb.net/wp-content/uploads/2020/01/485165_PR_130_SI_24_06_14_255-m.png",
  title: "Eyes",
  dsc:
    "John Steve, Eyes Doctor,    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora consequatur dolor enim placeat necessitatibus hic nihil illo quod aliquid doloremque perferendis, sequi asperiores facere voluptate. Repellendus consectetur porro perspiciatis.",
};

export default App;
