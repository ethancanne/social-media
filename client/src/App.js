import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import views from "./views/Views";

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
        <div className=''>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
