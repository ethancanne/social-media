import "./SignIn.scss";
import React, { useState } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import views from "../../views";

const SignIn = ({ setShowingAuthView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignIn = e => {
    e.preventDefault();
    try {
      const res = axios.post(Routes.User.SignUp, {});
    } catch {}
  };
  return (
    <>
      <form onSubmit={submitSignIn}>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='standard'
          color='secondary'
        />
        <Button variant='text'>Sign In</Button>
      </form>

      <Button
        variant='text'
        onClick={() => setShowingAuthView(views.authenticate.SIGN_UP)}>
        Sign Up Instead
      </Button>
    </>
  );
};

export default SignIn;
