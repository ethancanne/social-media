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

const Post = ({ post }) => {
  const { addSidePage } = useContext(pageContext);
  return (
    <Card
      sx={{ width: "500px", marginBottom: "40px" }}
      onClick={() => addSidePage(sidePages.VIEW_POST, { post })}>
      <CardHeader
        title={post.title}
        subheader={new Date(post.timestamp).toLocaleDateString()}
      />
      <CardMedia component='img' height='194' image={post.image} alt='post' />
      <CardActions disableSpacing>
        <IconButton aria-label='support'>
          <ThumbsUpIcon />
        </IconButton>
        <IconButton aria-label='oppose'>
          <ThumbsDownIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph>{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
