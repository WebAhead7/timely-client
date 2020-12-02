import React, { useEffect } from "react";
import Home from "../screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import "./App.css";
import Clinic from "../screens/Clinic";
import { getDocList } from "../Api/api";
import Navbar from "../components/Navbar";

function App() {
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
            {islogin ? <Home list={list} /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route
            path="/clinic/:id/:docname/:title"
            component={(props) => <Clinic {...props} />}
          />

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

export default App;
