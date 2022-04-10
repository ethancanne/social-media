import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import "./Page.scss";

/**
 * A wrapper that should go around every page
 * @author  Ethan Cannelongo
 * @date   02/13/2022
 */
export const Page = ({ showSideBar = true, children, currentPage }) => {
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
                Home
              </Link>

              <Link
                to={"/profile"}
                className={
                  currentPage == pages.PROFILE
                    ? "side-bar-navigation-item active"
                    : "side-bar-navigation-item"
                }>
                Profile
              </Link>
              <Link
                to='/settings'
                className={
                  currentPage == pages.SETTINGS
                    ? "side-bar-navigation-item active"
                    : "side-bar-navigation-item"
                }>
                Settings
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className='page-contents'>{children}</div>
    </div>
  );
};

export const pages = {
  HOME: "home",
  PROFILE: "profile",
  SETTINGS: "settings",
};
