import "./SignUp.scss";
import React, { useContext, useState } from "react";
import axios from "axios";
import Routes from "../../../../routes";
import userContext from "../../../context/user/userContext";
import { styled } from "@mui/material/styles";

import notificationContext from "../../../context/notification/notificationContext";
import { notificationTypes } from "../../notification/NotificationTypes";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import IconButton from "@mui/material/IconButton";
import views from "../../views";

const SignUp = ({ setShowingAuthView }) => {
  const { signUp } = useContext(userContext);
  const { showNotification } = useContext(notificationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const submitSignUp = async e => {
    e.preventDefault();

    try {
      if (
        fullName === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      )
        throw "Please fill out all fields";
      const successMsg = await signUp(
        fullName,
        username,
        email,
        password,
        confirmPassword,
        profilePicture
      );
      showNotification(successMsg, notificationTypes.SUCCESS);
    } catch (err) {
      console.log("ERROR!!!!", err);
      showNotification(err, notificationTypes.ERROR);
    }
  };

  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <form onSubmit={submitSignUp}>
        <div className='side-by-side'>
          <TextField
            onChange={e => setFullName(e.target.value)}
            value={fullName}
            label='Full Name'
            variant='outlined'
            color='secondary'
          />
          <TextField
            onChange={e => setUsername(e.target.value)}
            value={username}
            label='Username'
            variant='outlined'
            color='secondary'
          />
        </div>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email}
          label='Email'
          variant='outlined'
          color='secondary'
        />
        <div className='side-by-side'>
          <TextField
            onChange={e => setPassword(e.target.value)}
            type='password'
            value={password}
            label='Password'
            variant='outlined'
            color='secondary'
          />
          <TextField
            onChange={e => setConfirmPassword(e.target.value)}
            type='password'
            value={confirmPassword}
            label='Confirm Password'
            variant='outlined'
            color='secondary'
          />
        </div>
        <div className='side-by-side'>
          <label htmlFor='contained-button-file'>
            <Input
              accept='image/*'
              multiple
              id='contained-button-file'
              type='file'
              color='secondary'
              onChange={e => {
                setProfilePicture(e.target.files[0]);
              }}
            />
            <Button variant='outlined' color='secondary' component='span'>
              Upload Profile Picture
            </Button>
          </label>

          <ProfilePicture
            image={profilePicture !== "" && URL.createObjectURL(profilePicture)}
            alt={"profilePic"}
            isBase64={false}
            size={40}
          />
        </div>
        <Button variant='contained' color='secondary' onClick={submitSignUp}>
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
