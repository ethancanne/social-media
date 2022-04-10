import "./Authenticate.scss";
import React, { useState } from "react";
import SignUp from "../../views/auth/signUp/SignUp";
import SignIn from "../../views/auth/signIn/SignIn";

import Page from "../Page";
import Logo from "../../components/Logo/Logo";
import views from "../../views/views";

const Authenticate = () => {
  const [showingAuthView, setShowingAuthView] = useState(
    views.authenticate.SIGN_UP
  );

  const getAuthView = () => {
    switch (showingAuthView) {
      case views.authenticate.SIGN_IN:
        return (
          <div className='auth-view-container sign-in'>
            <SignIn setShowingAuthView={setShowingAuthView} />
          </div>
        );
      case views.authenticate.SIGN_UP:
        return (
          <div className='auth-view-container sign-up'>
            <SignUp setShowingAuthView={setShowingAuthView} />
          </div>
        );
      default:
        return (
          <div className='auth-view-container'>
            <SignUp setShowingAuthView={setShowingAuthView} />
          </div>
        );
    }
  };

  return (
    <Page showSideBar={false}>
      <div className='authenticate-page'>
        <div className='auth-form'>
          <div className='auth-form-header'>
            <Logo nameOfClass='auth-logo' />
            <h1 className='auth-title'>{showingAuthView}</h1>
          </div>
          {getAuthView()}
        </div>
      </div>
    </Page>
  );
};

export default Authenticate;
