import "./GeneralSettingsView.scss";
import React, { useContext } from "react";
import ProfileIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import ThemeIcon from "@mui/icons-material/DarkMode";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import { settingPages } from "../../../pages/settings/Settings";
import { useHistory } from "react-router-dom";
import userContext from "../../../context/user/userContext";
import pageContext from "../../../context/page/pageContext";
import { notificationTypes } from "../../notification/NotificationTypes";

const GeneralSettingsView = () => {
  const history = useHistory();
  const { loggedInUser, toggleDarkMode } = useContext(userContext);
  const { showNotification } = useContext(pageContext);

  const submitToggleDarkMode = async () => {
    try {
      const message = await toggleDarkMode();
      console.log(message);
      showNotification(message, notificationTypes.SUCCESS);
    } catch (err) {
      showNotification(err, notificationTypes.SUCCESS);
    }
  };
  return (
    <div className='settings-list-container'>
      <Button
        className='settings-list-item'
        onClick={() => history.push("/settings/" + settingPages.EDIT_PROFILE)}>
        <div className='settings-item-left'>
          <ProfileIcon />
          <h1>Edit Profile</h1>
          <p>Edit you information available to anyone and everyone</p>
        </div>
        <div className='settings-item-right'>
          <ArrowIcon />
        </div>
      </Button>
      <Button
        className='settings-list-item'
        onClick={() =>
          history.push("/settings/" + settingPages.CHANGE_PASSWORD)
        }>
        <div className='settings-item-left'>
          <LockIcon />
          <h1>Change Password</h1>
          <p>If you know your previous password, you can change it here</p>
        </div>
        <div className='settings-item-right'>
          <ArrowIcon />
        </div>
      </Button>
      <Button
        className='settings-list-item'
        onClick={() => submitToggleDarkMode()}>
        <div className='settings-item-left'>
          <ThemeIcon />
          <h1>Dark Mode</h1>
          <p>Is this application hard on your eyes? Try dark mode!</p>
        </div>
        <div className='settings-item-right'>
          <h1>{loggedInUser.isDarkModeEnabled ? "ON" : "OFF"}</h1>
        </div>
      </Button>
    </div>
  );
};

export default GeneralSettingsView;
