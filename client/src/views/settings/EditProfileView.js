import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import { styled } from "@mui/material/styles";

const EditProfileView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const Input = styled("input")({
    display: "none",
  });
  return (
    <div>
      {" "}
      <form onSubmit={submitSignUp}>
        <div className='side-by-side'>
          <TextField
            onChange={e => setFullName(e.target.value)}
            value={fullName}
            label='Full Name'
            variant='outlined'
            color='secondary'
          />
          <label>Bio</label>
          <TextareaAutosize
            onChange={e => setBio(e.target.value)}
            value={bio}
            label='Content'
            variant='outlined'
            color='secondary'
            placeholder='Write about who you really are on the inside...'
            className='create-post-content create-post-input'
          />
          <TextField
            onChange={e => setUsername(e.target.value)}
            value={username}
            label='Username'
            variant='outlined'
            color='secondary'
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
            image={profilePicture !== "" && URL.createObjectURL(profilePicture)}
            alt={"profilePic"}
            isBase64={false}
            size={100}
          />
        </div>
        <Button variant='contained' color='secondary' onClick={submitSignUp}>
          Submit Edit
        </Button>
      </form>
    </div>
  );
};

export default EditProfileView;
