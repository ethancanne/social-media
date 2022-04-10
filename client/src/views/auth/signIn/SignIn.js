import "./SignIn.scss";
import React, { useState, useContext } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import views from "../../views";

//Import Context
import userContext from "../../../context/user/userContext";

const SignIn = ({ setShowingAuthView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(userContext);

  const submitSignIn = async e => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form>
        <TextField
          onChange={e => setEmail(e.target.value)}
          type={"email"}
          value={email}
          label='Email'
          variant='standard'
          color='secondary'
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          type='password'
          value={password}
          label='Password'
          variant='standard'
          color='secondary'
        />
        <Button variant='text' onClick={submitSignIn}>
          Sign In
        </Button>
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
