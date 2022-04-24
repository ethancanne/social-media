import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo/Logo";
import ProfilePicture from "../components/profilePicture/ProfilePicture";
import userContext from "../context/user/userContext";
import notificationContext from "../context/page/pageContext";
import { notificationTypes } from "../views/notification/NotificationTypes";
import Button from "@mui/material/Button";

//icons
import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import "./Page.scss";
import pageContext from "../context/page/pageContext";
import { settingPages } from "./settings/Settings";

/**
 * A wrapper that should go around every page
 * @author  Ethan Cannelongo
 * @date   02/13/2022
 */
export const Page = ({ showSideBar = true, children, currentPage }) => {
  const { loggedInUser, isLoggedIn, signOut } = useContext(userContext);
  const { showNotification } = useContext(notificationContext);
  const { showingSidePages } = useContext(pageContext);

  const submitSignOut = () => {
    signOut();
    //show success notification
    showNotification("You have been signed out", notificationTypes.SUCCESS);
  };
  return (
    <div className='page'>
      {showSideBar && (
        <div className='side-bar'>
          <Link to='/' style={{ textDecoration: "none", color: "black" }}>
            <div className='side-bar-header'>
              <Logo />
            </div>
          </Link>

          <div className='side-bar-navigation'>
            <h1>Menu</h1>
            <div className='side-bar-navigation-items'>
              <Link
                to='/dashboard'
                className={
                  currentPage == pages.HOME
                    ? "side-bar-navigation-item active"
                    : "side-bar-navigation-item"
                }>
                <HomeIcon />
                Home
              </Link>

              <Link
                to={"/profile/" + loggedInUser.username}
                className={
                  currentPage == pages.PROFILE
                    ? "side-bar-navigation-item active"
                    : "side-bar-navigation-item"
                }>
                <ProfileIcon />
                Profile
              </Link>
              <Link
                to={"/settings/" + settingPages.GENERAL}
                className={
                  currentPage == pages.SETTINGS
                    ? "side-bar-navigation-item active"
                    : "side-bar-navigation-item"
                }>
                <SettingsIcon />
                Settings
              </Link>
            </div>
          </div>
          <div className='side-bar-bottom'>
            <h1>Account</h1>
            <div className='side-bar-profile-container'>
              <ProfilePicture
                name={loggedInUser.fullName}
                image={loggedInUser.profilePicture}
                isBase64={true}
                size={50}
              />
              <div className='profile-name-container'>
                <p className='profile-fullname'>{loggedInUser.fullName}</p>
                <p className='profile-username'>@{loggedInUser.username}</p>
              </div>
            </div>
            <Button variant='text' onClick={submitSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      )}

      <div
        className={
          showingSidePages.length > 0
            ? "page-contents showing-side-page"
            : "page-contents"
        }>
        {children}
      </div>
    </div>
  );
};

export const pages = {
  HOME: "home",
  PROFILE: "profile",
  SETTINGS: "settings",
};
