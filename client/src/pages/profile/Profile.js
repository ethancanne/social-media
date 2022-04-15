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
        <h1>{showingUserProfile.firstName}</h1>
      </div>
    </Page>
  );
};

export default Profile;
