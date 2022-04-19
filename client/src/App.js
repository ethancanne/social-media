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
import Notification from "./views/notification/Notification";
import SidePage from "./pages/sidePage/SidePage";
import pageContext from "./context/page/pageContext";
import { Page, pages } from "./pages/Page";

//Import Models

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [user, setUser] = useState(null);
  const { isLoggedIn } = useContext(userContext);
  const { showingSidePages } = useContext(pageContext);
  const { addSidePage } = useContext(pageContext);

  useEffect(() => {
    updateAuthenticationToken();
  }, []);

  const updateAuthenticationToken = async () => {};

  return (
    <Router>
      <div className='app'>
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
            path='/profile/:id'
            render={props => {
              // if (showingSidePages.length > 0 && isLoggedIn) {
              //   addSidePage(views.PROFILE, props);
              // } else {
              return isLoggedIn ? (
                <Page currentPage={pages.PROFILE}>
                  <Profile {...props} />
                </Page>
              ) : (
                <Redirect to={"/"} />
              );
              // }
            }}
          />
          <Route exact path='/settings'>
            {isLoggedIn ? <Settings /> : <Redirect to={"/"} />}
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
