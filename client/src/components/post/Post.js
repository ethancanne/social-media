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

const Post = ({ post }) => {
    const { addSidePage } = useContext(pageContext);
    const { loggedInUser } = useContext(userContext);
    return (
        <Card
            sx={{
                width: "500px",
                backgroundColor: "white",
                borderRadius: "0px",
                margin: "5px",
                marginBottom: "40px",
                overflow: "visible",
            }}
            onClick={() => addSidePage(sidePages.VIEW_POST, { post })}
            variant='outlined'>
            <CardHeader
                title={post.title}
                avatar={
                    <ProfilePicture
                        image={loggedInUser.profilePicture}
                        name={"johh"}
                        size={40}
                    />
                }
            />
            <CardMedia
                component='img'
                image={post.image}
                alt='post'
            />

            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='support'>
                    <ThumbsUpIcon />
                </IconButton>
                <IconButton aria-label='oppose'>
                    <ThumbsDownIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Post;
