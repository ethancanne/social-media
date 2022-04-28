import "./EditProfileView.scss";
import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import { styled } from "@mui/material/styles";
import userContext from "../../../context/user/userContext";
import pageContext from "../../../context/page/pageContext";
import { notificationTypes } from "../../notification/NotificationTypes";

const EditProfileView = () => {
  const { editProfile, loggedInUser } = useContext(userContext);
  const { showNotification } = useContext(pageContext);

  const [email, setEmail] = useState(loggedInUser.email);
  const [bio, setBio] = useState(loggedInUser.bio);
  const [fullName, setFullName] = useState(loggedInUser.fullName);
  const [username, setUsername] = useState(loggedInUser.username);
  const [profilePicture, setProfilePicture] = useState(
    loggedInUser.profilePicture
  );
  const Input = styled("input")({
    display: "none",
  });

  const submitEditProfile = async e => {
    e.preventDefault();
    console.log(email, bio, fullName, username, profilePicture);
    try {
      const message = await editProfile(
        fullName,
        username,
        email,
        bio,
        profilePicture
      );
      showNotification(message, notificationTypes.SUCCESS);
    } catch (err) {
      showNotification(err, notificationTypes.ERROR);
    }
  };
  return (
    <form onSubmit={submitEditProfile} className='edit-profile-form'>
      <div className='side-by-side'>
        <TextField
          onChange={e => setFullName(e.target.value)}
          value={fullName}
          variant='outlined'
          label='Full Name'
          color='secondary'
        />

        <TextField
          onChange={e => setUsername(e.target.value)}
          value={username}
          label='Username'
          variant='outlined'
          color='secondary'
        />
      </div>
      <div>
        <p>Bio</p>
        <TextareaAutosize
          onChange={e => setBio(e.target.value)}
          value={bio}
          label='Content'
          variant='outlined'
          color='secondary'
          placeholder='Write about who you really are on the inside...'
          className='bio-content'
        />
      </div>
      <TextField
        onChange={e => setEmail(e.target.value)}
        value={email}
        label='Email'
        variant='outlined'
        color='secondary'
      />
      <div className='side-by-side'>
        <label htmlFor='contained-button-file'>
          <Input
            accept='image/*'
            id='contained-button-file'
            type='file'
            color='secondary'
            onChange={e => {
              setProfilePicture(e.target.files[0]);
            }}
          />
          <Button variant='outlined' color='secondary' component='span'>
            Upload Profile Picture
          </Button>
        </label>

        <ProfilePicture
          image={profilePicture}
          alt={"profilePic"}
          isBase64={true}
          size={50}
        />
      </div>
      <Button variant='contained' color='secondary' onClick={submitEditProfile}>
        Submit Edit
      </Button>
    </form>
  );
};

export default EditProfileView;
