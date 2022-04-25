import "./ChangePasswordView.scss";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import { styled } from "@mui/material/styles";
import userContext from "../../../context/user/userContext";
import pageContext from "../../../context/page/pageContext";
import { notificationTypes } from "../../notification/NotificationTypes";

const ChangePasswordView = () => {
  const { changePassword, loggedInUser } = useContext(userContext);
  const { showNotification } = useContext(pageContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const Input = styled("input")({
    display: "none",
  });

  const submitChangePassword = async e => {
    e.preventDefault();
    try {
      const message = await changePassword(
        currentPassword,
        newPassword,
        confirmNewPassword
      );
      showNotification(message, notificationTypes.SUCCESS);
    } catch (err) {
      showNotification(err, notificationTypes.ERROR);
    }
  };

  return (
    <form onSubmit={submitChangePassword} className='change-password-form'>
        <p>Current Password</p>
        <TextField
          onChange={e => setCurrentPassword(e.target.value)}
          value={currentPassword}
          type='password'
          variant='outlined'
          color='secondary'
        />
        <p>New Password</p>
        <TextField
          onChange={e => setNewPassword(e.target.value)}
          value={newPassword}
          type='password'
          variant='outlined'
          color='secondary'
        />
        <p>Confirm New Password</p>
        <TextField
          onChange={e => setConfirmNewPassword(e.target.value)}
          value={confirmNewPassword}
          type='password'
          variant='outlined'
          color='secondary'
        />
        <Button sx={{marginTop:"16px"}} variant='contained' color='secondary' onClick={submitChangePassword}>
          Submit
        </Button>
    </form>
    
  );
};

export default ChangePasswordView;
