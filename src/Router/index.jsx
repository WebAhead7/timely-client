import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App/App";

// import Navbar from "../../components/Navbar/Navbar";

function Router() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default Router;
