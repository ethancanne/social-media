import "./Profile.scss";
import React from "react";
import { Page, pages } from "../Page";

const Profile = () => {
  return (
    <Page currentPage={pages.PROFILE}>
      <div className='profile-page'>
        <h1>Profile</h1>
      </div>
    </Page>
  );
};

export default Profile;
