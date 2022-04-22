import "./UserListView.scss";
import React, { useContext, useEffect } from "react";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import pageContext from "../../context/page/pageContext";
import userContext from "../../context/user/userContext";
import { sidePages } from "../../pages/sidePage/sidePages";

const UserListView = ({ users }) => {
  const { addSidePage, removeSidePage } = useContext(pageContext);
  const { getProfile } = useContext(userContext);
  let history = useHistory();

  const displayProfilePage = user => {
    history.push(`/profile/${user.username}`);
    removeSidePage();
  };
  return (
    <div className='user-list-view-container'>
      {users &&
        users.length > 0 &&
        users.map(user => (
          <Button
            variant='text'
            className='user-item'
            onClick={() => displayProfilePage(user)}>
            <div className='user-main-info'>
              <ProfilePicture
                className='user-item-profile-picture'
                image={user.profilePicture}
                name={user.fullName}
                isBase64={true}
                size={50}
              />
              <div className='user-item-fullname'>{user.fullName}</div>
            </div>
            <div className='user-item-username'>@{user.username}</div>
          </Button>
        ))}
    </div>
  );
};

export default UserListView;
