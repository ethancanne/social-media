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
import Home from "./pages/home/Home";

//Import views
import views from "./views/views";
import Authenticate from "./pages/authenticate/Authenticate";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";

//Import Models

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [user, setUser] = useState(null);
  const { isLoggedIn } = useContext(userContext);

  useEffect(() => {
    updateAuthenticationToken();
  }, []);

  const updateAuthenticationToken = async () => {};

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            {isLoggedIn ? <Redirect to={"/home"} /> : <Authenticate />}
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route
            path='/profile/:id'
            render={props => {
              return isLoggedIn ? (
                <>
                  <Profile {...props} />
                </>
              ) : (
                <Redirect to={"/"} />
              );
            }}
          />
          <Route exact path='/settings'>
            <Settings />
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
