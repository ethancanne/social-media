import "./Profile.scss";
import React, { useContext, useEffect } from "react";
import userContext from "../../context/user/userContext";
import { Page, pages } from "../Page";

const Profile = props => {
  const { getProfile, showingUserProfile, isLoading } = useContext(userContext);

  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = async () => {
    const id = props.match.params.id;

    if (id !== showingUserProfile._id) {
      getProfile(id);
    }
  };

  return (
    <Page currentPage={pages.PROFILE}>
      <div className='profile-page'>
        <div className='user-info-container'>
          <img src='' alt='' className='user-info-profile-image' />
          <p className='user-info-name'>{showingUserProfile.fullName}</p>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
