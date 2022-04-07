import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import views from "./views/Views";
import Authenticate from "./pages/authenticate/Authenticate";
import Profile from "./pages/profile/Profile";

//Import Models

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            {/* {isLoggedIn() ? <Dashboard /> : <Authenticate />} */}
            <Authenticate />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
