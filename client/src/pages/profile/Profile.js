import "./Profile.scss";
import React, { useContext, useEffect, useState } from "react";
import userContext from "../../context/user/userContext";
import { Page, pages } from "../Page";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import { notificationTypes } from "../../views/notification/NotificationTypes";
import Button from "@mui/material/Button";
import pageContext from "../../context/page/pageContext";
import { sidePages } from "../sidePage/sidePages";

const Profile = props => {
  const { getProfile, isLoading, showingUserProfile, loggedInUser } =
    useContext(userContext);
  const { addSidePage } = useContext(pageContext);

  useEffect(() => {
    console.log(props.match.params.id);
    getProfile(props.match.params.id);
  }, [props.match.params.id]);

  const retrieveUser = async () => {
    const id = props.match.params.id;

    await getProfile(id);
  };

  return (
    <div className='profile-page'>
      <div className='user-info-container'>
        <ProfilePicture
          image={showingUserProfile.profilePicture}
          name={showingUserProfile.fullName}
          size={200}
        />
        <div className='names-container'>
          <p className='user-info-name'>{showingUserProfile.fullName}</p>
          <p className='user-info-username'>@{showingUserProfile.username}</p>

          <div className='user-info-bio'>
            <p>
              <strong>Bio:</strong>
            </p>
            <p>{showingUserProfile.bio}</p>
          </div>
        </div>

        <div className='stats-container'>
          <div className='stat-item'>
            <h1>Posts:</h1>
            <p>{showingUserProfile.posts.length}</p>
          </div>
          <div className='stat-item'>
            <h1>Followers:</h1>
            <p>{showingUserProfile.followers.length}</p>
          </div>
          <div className='stat-item'>
            <button
              onClick={() =>
                addSidePage(sidePages.FOLLOWING, {
                  userId: showingUserProfile._id,
                })
              }>
              Following:
            </button>
            <p>{showingUserProfile.following.length}</p>
          </div>
        </div>
        <div className='actions-container'>
          {showingUserProfile._id !== loggedInUser._id ? (
            <Button variant='outlined'>Follow</Button>
          ) : (
            <Button variant='outlined'>Edit Profile</Button>
          )}
        </div>
      </div>
      <div className='user-posts-container'>
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Profile;
