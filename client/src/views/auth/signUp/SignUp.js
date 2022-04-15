import "./SignUp.scss";
import React, { useContext, useState } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import userContext from "../../../context/user/userContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import views from "../../views";

const SignUp = ({ setShowingAuthView }) => {
  const { signUp } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitSignUp = async e => {
    e.preventDefault();
    try {
      const successMsg = await signUp(
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      );
      showNotification(successMsg, notificationTypes.SUCCESS);
    } catch (err) {
      console.log("ERROR!!!!", err);
      showNotification(err, notificationTypes.ERROR);
    }
  };
  return (
    <>
      <form onSubmit={submitSignUp}>
        <div className='sidebyside'>
          <TextField
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            label='First Name'
            variant='standard'
            color='secondary'
          />
          <TextField
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            label='Last Name'
            variant='standard'
            color='secondary'
          />
        </div>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='standard'
          color='secondary'
        />
        <div className='sidebyside'>
          <TextField
            onChange={e => setPassword(e.target.value)}
            type='password'
            value={password}
            label='Password'
            variant='standard'
            color='secondary'
          />
          <TextField
            onChange={e => setConfirmPassword(e.target.value)}
            type='password'
            value={confirmPassword}
            label='Confirm Password'
            variant='standard'
            color='secondary'
          />
        </div>
        <Button variant='text' onClick={submitSignUp}>
          Sign Up
        </Button>
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
