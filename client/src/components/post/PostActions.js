import "./PostActions.scss";
import React, { useContext, useState } from "react";
import postsContext from "../../context/posts/postsContext";
import IconButton from "@mui/material/IconButton";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import ThumbsDownIcon from "@mui/icons-material/ThumbDown";
import userContext from "../../context/user/userContext";

const PostActions = ({ post }) => {
  const { supportPost, opposePost } = useContext(postsContext);
  const { loggedInUser } = useContext(userContext);
  const [tempPost, setTempPost] = useState(post);
  const [hasSupported, setHasSupported] = useState(
    post.supports.includes(loggedInUser._id)
  );
  const [hasOpposed, setHasOpposed] = useState(
    post.opposes.includes(loggedInUser._id)
  );

  const handleOpposeBtn = async postId => {
    try {
      const res = await opposePost(postId);
      setTempPost(res.post);
      setHasOpposed(res.didAddOppose);
    } catch (err) {
      console.log(err);
      showNotification(err.message || err, notificationTypes.ERROR);
    }
  };

  const handleSupportBtn = async postId => {
    try {
      const res = await supportPost(postId);
      setTempPost(res.post);
      setHasSupported(res.didAddSupport);
    } catch (err) {
      console.log(err);
      showNotification(err.message || err, notificationTypes.ERROR);
    }
  };
  return (
    <div className='post-actions-container'>
      <div className='action-item'>
        <IconButton
          aria-label='support'
          onClick={() => handleSupportBtn(post._id)}>
          <ThumbsUpIcon
            sx={{ color: hasSupported ? "rgb(160, 124, 247)" : "gray" }}
          />
        </IconButton>
        <p className='supportcount'>{tempPost.supports.length}</p>
      </div>
      <div className='action-item'>
        <IconButton
          aria-label='oppose'
          onClick={() => handleOpposeBtn(post._id)}>
          <ThumbsDownIcon
            sx={{ color: hasOpposed ? "rgb(160, 124, 247)" : "gray" }}
          />
        </IconButton>
        <p className='opposecount'>{tempPost.opposes.length}</p>
      </div>
    </div>
  );
};

export default PostActions;
