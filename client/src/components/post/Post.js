import React, { useContext } from "react";
import "./Post.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import ThumbsDownIcon from "@mui/icons-material/ThumbDown";
import ProfilePicture from "../profilePicture/ProfilePicture";
import pageContext from "../../context/page/pageContext";
import { sidePages } from "../../pages/sidePage/sidePages";
import userContext from "../../context/user/userContext";
import { notificationTypes } from "../../views/notification/NotificationTypes";
import postsContext from "../../context/posts/postsContext";
import PostActions from "./PostActions";

const Post = ({ post }) => {
  const { addSidePage, showNotification } = useContext(pageContext);

  return (
    <Card
      sx={{
        width: "500px",
        borderRadius: "0px",
        margin: "5px",
        marginBottom: "40px",
        overflow: "visible",
        cursor: "pointer",
      }}
      className='post-card'
      variant='outlined'>
      <CardHeader
        title={post.title}
        onClick={() => addSidePage(sidePages.VIEW_POST, { post })}
        avatar={
          <ProfilePicture
            image={post.creator.profilePicture}
            name={"johh"}
            isBase64={true}
            size={40}
          />
        }
      />
      <CardMedia
        component='img'
        image={"data:image/png;charset=utf-8;base64," + post.image}
        alt='post'
        onClick={() => addSidePage(sidePages.VIEW_POST, { post })}
      />

      <CardContent
        onClick={() => addSidePage(sidePages.VIEW_POST, { post })}
        className='post-content'>
        <Typography variant='body2'>{post.content}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PostActions post={post} />
      </CardActions>
    </Card>
  );
};

export default Post;
