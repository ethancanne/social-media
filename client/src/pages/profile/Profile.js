import "./Profile.scss";
import React, { useContext, useEffect, useState } from "react";
import userContext from "../../context/user/userContext";
import { Page, pages } from "../Page";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import { notificationTypes } from "../../views/notification/NotificationTypes";
import Button from "@mui/material/Button";
import pageContext from "../../context/page/pageContext";
import { sidePages } from "../sidePage/sidePages";
import Posts from "../../views/home/posts/Posts";

const Profile = props => {
  const {
    getProfile,
    isLoading,
    showingUserProfile,
    loggedInUser,
    addFollower,
  } = useContext(userContext);
  const { addSidePage, showNotification } = useContext(pageContext);

  useEffect(() => {
    getProfile(props.match.params.username);
  }, [props.match.params.username]);

  const submitAddFollower = async () => {
    const message = await addFollower(showingUserProfile._id);
    //show success notification
    showNotification(message, notificationTypes.SUCCESS);
  };
  return (
    <div className='profile-page'>
      {showingUserProfile && (
        <>
          <div className='user-info-container'>
            <ProfilePicture
              image={showingUserProfile.profilePicture}
              name={showingUserProfile.fullName}
              size={200}
            />
            <div className='names-container'>
              <p className='user-info-name'>{showingUserProfile.fullName}</p>
              <p className='user-info-username'>
                @{showingUserProfile.username}
              </p>

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
                <Button
                  variant='text'
                  color='secondary'
                  className='stat-button'
                  onClick={() =>
                    addSidePage(sidePages.FOLLOWERS, {
                      userId: showingUserProfile._id,
                    })
                  }>
                  <h1>Followers:</h1>
                  <p>{showingUserProfile.followers.length}</p>
                </Button>
              </div>
              <div className='stat-item'>
                <Button
                  variant='text'
                  color='secondary'
                  className='stat-button'
                  onClick={() =>
                    addSidePage(sidePages.FOLLOWING, {
                      userId: showingUserProfile._id,
                    })
                  }>
                  <h1>Following</h1>
                  <p>{showingUserProfile.following.length}</p>
                </Button>
              </div>
            </div>
            <div className='actions-container'>
              {showingUserProfile._id !== loggedInUser._id ? (
                loggedInUser.following.filter(
                  followingItem => followingItem.user === showingUserProfile._id
                ).length === 0 ? (
                  <>
                    {console.log(loggedInUser)}
                    <Button
                      variant='outlined'
                      onClick={() => submitAddFollower()}>
                      Follow
                    </Button>
                  </>
                ) : (
                  <Button variant='outlined' disabled>
                    Following
                  </Button>
                )
              ) : (
                <Button variant='outlined'>Edit Profile</Button>
              )}
            </div>
          </div>
          <div className='user-posts-container'>
            <Posts />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
