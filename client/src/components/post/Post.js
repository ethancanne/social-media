import React from 'react'
import "./Post.scss"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProfilePicture from '../profilePicture/ProfilePicture';


//export default function RecipeReviewCard() {


const Post = ({ post }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={post.title}
                subheader={new Date(post.timestamp).toLocaleDateString()}
            />
            <CardMedia
                component="img"
                height="194"
                image={post.image}
                alt="post"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="support">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
            <CardContent>
                <Typography paragraph>{post.body}</Typography>
            </CardContent>
        </Card>
        /*return (
            <div classname="postContainer">
                <div className="postTitle">Title: {post.title}</div>
                <img className="postImage" src={post.image} alt />
                <div className="postBody">{post.body}</div>
                <button className="supports">Supports {post.supports}</button>
                <button className="opposes">Opposes {post.opposes}</button>
    
            </div>*/
    )
}

export default Post