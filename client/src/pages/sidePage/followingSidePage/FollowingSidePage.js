import "./FollowingSidePage.scss";
import React, { useEffect, useState } from "react";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import axios from "axios";
import routes from "../../../../routes";
import UserListView from "../../../views/userListView/UserListView";

const FollowingSidePage = ({ userId }) => {
  const [following, setFollowing] = useState([]);
  const getFollowing = async () => {
    const res = await axios.get(routes.User.GetFollowing + "/" + userId);
    setFollowing(res.data.following);
  };

  useEffect(() => {
    console.log("Hi");

    getFollowing();
  }, []);

  return (
    <div className='following-side-page-container'>
      <UserListView users={following} />
    </div>
  );
};

export default FollowingSidePage;
