import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import "./Page.scss";

/**
 * A wrapper that should go around every page
 * @author  Ethan Cannelongo
 * @date   02/13/2022
 */
const Page = props => {
  return (
    <div className='page'>
      {props.showSideBar && (
        <div className='side-bar'>
          <Link to='/' style={{ textDecoration: "none", color: "black" }}>
            <div className='side-bar-header'>
              <Logo />
            </div>
          </Link>

          <div className='side-bar-navigation'>
            <h1>Menu</h1>
            <div className='side-bar-navigation-items'>
              <div className='side-bar-navigation-item active'>
                <Link to='/'>Home</Link>
              </div>

              <div className='side-bar-navigation-item'>
                <Link to='/'>Profile</Link>
              </div>
              <div className='side-bar-navigation-item'>
                <Link to='/'>Settings</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='page-contents'>{props.children}</div>
    </div>
  );
};

export default Page;
