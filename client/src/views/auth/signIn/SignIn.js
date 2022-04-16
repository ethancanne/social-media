import "./SignIn.scss";
import React, { useState, useContext } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import views from "../../views";

//Import Context
import userContext from "../../../context/user/userContext";
import notificationContext from "../../../context/notification/notificationContext";
import { notificationTypes } from "../../notification/NotificationTypes";

const SignIn = ({ setShowingAuthView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(userContext);
  const { showNotification } = useContext(notificationContext);

  const submitSignIn = async e => {
    e.preventDefault();
    try {
      const successMsg = await signIn(email, password);
      showNotification(successMsg, notificationTypes.SUCCESS);
    } catch (err) {
      console.log("ERROR!!!!", err);
      showNotification(err, notificationTypes.ERROR);
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
          variant='outlined'
          color='secondary'
        />
        <TextField
          onChange={e => setPassword(e.target.value)}
          type='password'
          value={password}
          label='Password'
          variant='outlined'
          color='secondary'
        />
        <Button variant='contained' color='secondary' onClick={submitSignIn}>
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
