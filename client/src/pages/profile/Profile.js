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
import Loading from "../../components/loading/Loading";

import { useHistory } from "react-router";
import { settingPages } from "../settings/Settings";
import postsContext from "../../context/posts/postsContext";

const Profile = props => {
  const history = useHistory();
  const {
    getProfile,
    removeProfile,
    isLoading,
    showingUserProfile,
    loggedInUser,
    toggleFollower,
  } = useContext(userContext);
  const { addSidePage, showNotification } = useContext(pageContext);
  const { getUserPosts, userPosts } = useContext(postsContext);

  const getUserInformation = async () => {
    try {
      await getProfile(props.match.params.username);
    } catch (err) {
      showNotification(err);
    }
  };
  useEffect(() => {
    getUserInformation();
    return () => {
      removeProfile();
    };
  }, [props.match.params.username]);

  useEffect(() => {
    showingUserProfile._id && getUserPosts(showingUserProfile._id);
  }, [showingUserProfile]);

  const submitToggleFollower = async () => {
    try {
      const message = await toggleFollower(showingUserProfile._id);
      showNotification(message, notificationTypes.SUCCESS);
    } catch (err) {
      showNotification(err.message || err, notificationTypes.ERROR);
    }
  };
  return (
    <div className='profile-page'>
      {isLoading ? (
        <Loading />
      ) : (
        showingUserProfile && (
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
                  <Button
                    variant='text'
                    color='secondary'
                    className='stat-button'
                    onClick={() =>
                      //TODO: scroll to posts
                      console.log("first")
                    }>
                    <h1>Posts:</h1>

                    <p>{showingUserProfile.posts.length}</p>
                  </Button>
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
                    user => user === showingUserProfile._id
                  ).length === 0 ? (
                    <>
                      <Button
                        variant='outlined'
                        onClick={() => submitToggleFollower()}>
                        Follow
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant='standard'
                      onClick={() => submitToggleFollower()}>
                      Unfollow
                    </Button>
                  )
                ) : (
                  <Button
                    variant='outlined'
                    onClick={() => {
                      history.push("/settings/" + settingPages.EDIT_PROFILE);
                    }}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
            <div className='user-posts-container'>
              <Posts
                title={showingUserProfile.fullName + "'s Posts"}
                posts={userPosts}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Profile;
