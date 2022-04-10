import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import "regenerator-runtime/runtime.js";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

//Import Context
import userContext from "./context/user/userContext";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import views from "./views/views";
import Authenticate from "./pages/authenticate/Authenticate";
import Profile from "./pages/profile/Profile";

//Import Models

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [user, setUser] = useState(null);
  const { isLoggedIn } = useContext(userContext);

  console.log(isLoggedIn);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            {isLoggedIn ? <Dashboard /> : <Authenticate />}
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route path='*'>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
