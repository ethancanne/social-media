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
import Authenticate from "./pages/authenticate/Authenticate";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Notification from "./views/notification/Notification";
import SidePage from "./pages/sidePage/SidePage";
import pageContext from "./context/page/pageContext";
import { Page, pages } from "./pages/Page";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { sidePages } from "./pages/sidePage/sidePages";

//Import Models

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const { isLoggedIn, loggedInUser } = useContext(userContext);
  const { showingSidePages } = useContext(pageContext);
  const { addSidePage } = useContext(pageContext);

  useEffect(() => {
    updateAuthenticationToken();
  }, []);

  const updateAuthenticationToken = async () => {};

  return (
    <Router>
      <div
        className={`app theme-${
          loggedInUser.isDarkModeEnabled ? "dark" : "light"
        }`}>
        <Notification />
        {showingSidePages.map((showingSidePage, index) => (
          <SidePage
            key={index}
            sidePage={showingSidePage.sidePage}
            {...showingSidePage.props}
          />
        ))}
        <Switch>
          <Route exact path='/'>
            {isLoggedIn ? <Redirect to={"/home"} /> : <Authenticate />}
          </Route>
          <Route exact path='/home'>
            {isLoggedIn ? <Home /> : <Redirect to={"/"} />}
          </Route>
          <Route
            path='/profile/:username'
            render={props => {
              return isLoggedIn ? (
                <>
                  <Fab
                    color='secondary'
                    aria-label='add'
                    className='create-post-fab'
                    onClick={() => addSidePage(sidePages.CREATE_POST)}>
                    <AddIcon />
                  </Fab>
                  <Page currentPage={pages.PROFILE}>
                    <Profile {...props} />
                  </Page>
                </>
              ) : (
                <Redirect to={"/"} />
              );
              // }
            }}
          />
          <Route
            path='/settings/:defaultView'
            render={props => {
              return isLoggedIn ? (
                <Page currentPage={pages.SETTINGS}>
                  <Settings {...props} />
                </Page>
              ) : (
                <Redirect to={"/"} />
              );
              // }
            }}
          />
          <Route path='*'>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
