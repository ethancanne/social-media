import "./CreatePostSidePage.scss";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const CreatePostSidePage = () => {
  //save title, content, image to state
  const [title, setTitle] = useState("te");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmitCreatePost = e => {
    e.preventDefault();
    console.log(title, content, image);
  };

  const Input = styled("input")({
    display: "none",
  });
  return (
    <div>
      <form onSubmit={handleSubmitCreatePost} className='create-post-form'>
        <TextField
          onChange={e => setTitle(e.target.value)}
          value={title}
          label='Title'
          variant='outlined'
          color='secondary'
          className='create-post-input'
        />
        <TextareaAutosize
          onChange={e => setContent(e.target.value)}
          value={content}
          label='Content'
          variant='outlined'
          color='secondary'
          placeholder='Write something...'
          className='create-post-content create-post-input'
        />

        <div className='create-post-choose-image-container'>
          <label htmlFor='contained-button-file'>
            <Input
              accept='image/*'
              id='contained-button-file'
              type='file'
              color='secondary'
              onChange={e => {
                setImage(e.target.files[0]);
              }}
              className='create-post-input'
            />
            <Button
              variant='outlined'
              color='secondary'
              component='span'
              sx={{ margin: "10px" }}>
              Upload Image
            </Button>
          </label>

          <img src={image !== "" && URL.createObjectURL(image)} alt={"image"} />
        </div>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleSubmitCreatePost}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreatePostSidePage;
