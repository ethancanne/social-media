import "./Authenticate.scss";
import React from "react";
import SignUp from "../../views/auth/signUp/SignUp";
import Page from "../Page";
import Logo from "../../components/Logo/Logo";

const Authenticate = () => {
  return (
    <Page showSideBar={false}>
      <div className='authenticate-page'>
        <div className='auth-form'>
          <div className='auth-form-header'>
            <Logo nameOfClass='auth-logo' />
          </div>
          <SignUp />
        </div>
      </div>
    </Page>
  );
};

export default Authenticate;
