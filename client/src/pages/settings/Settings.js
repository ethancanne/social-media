import "./Settings.scss";
import React from "react";
import { Page, pages } from "../Page";
import ProfileIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import ThemeIcon from "@mui/icons-material/DarkMode";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";

const Settings = () => {
  return (
    <Page currentPage={pages.SETTINGS}>
      <div className='settings-page'>
        <div className='settings-page-header'>
          <h1>Settings</h1>
          <p>General</p>
        </div>

        <div className='settings-list-container'>
          <div className='settings-list-item'>
            <div className='settings-item-left'>
              <ProfileIcon />
              <h1>Edit Profile</h1>
              <p>Edit you information available to anyone and everyone</p>
            </div>
            <div className='settings-item-right'>
              <ArrowIcon />
            </div>
          </div>
          <div className='settings-list-item'>
            <div className='settings-item-left'>
              <LockIcon />
              <h1>Change Password</h1>
              <p>Did you forget... Again</p>
            </div>
            <div className='settings-item-right'>
              <ArrowIcon />
            </div>
          </div>
          <div className='settings-list-item'>
            <div className='settings-item-left'>
              <ThemeIcon />
              <h1>Theme</h1>
              <p>Is this application hard on your eyes? Try dark mode!</p>
            </div>
            <div className='settings-item-right'>
              <button>Change</button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Settings;
