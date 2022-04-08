import "./SignUp.scss";
import React, { useState } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import views from "../../views";

const SignUp = ({ setShowingAuthView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitSignUp = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(Routes.User.SignUp, { email, password, confirmPassword });
    } catch { }
  };
  return (
    <>
      <form onSubmit={submitSignUp}>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='standard'
          color='secondary'
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          label='Password'
          variant='standard'
          color='secondary'
        />
        <Button variant='text'>Sign Up</Button>
      </form>

      <Button
        variant='text'
        onClick={() => setShowingAuthView(views.authenticate.SIGN_IN)}>
        Sign In Instead
      </Button>
    </>
  );
};

export default SignUp;
