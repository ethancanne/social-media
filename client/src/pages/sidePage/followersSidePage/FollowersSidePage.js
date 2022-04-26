import "./FollowersSidePage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserListView from "../../../views/userListView/UserListView";

const FollowersSidePage = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const getFollowing = async () => {
    console.log(userId);
    const res = await axios.get("/api/getFollowers" + "/" + userId);
    setFollowers(res.data.followers);
  };

  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <div className='followers-side-page-container'>
      <UserListView users={followers} />
    </div>
  );
};

export default FollowersSidePage;
