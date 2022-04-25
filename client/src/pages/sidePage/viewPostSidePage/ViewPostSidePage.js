import React from "react";
import "./ViewPostSidePage.scss";
import ThumbsUpIcon from "@mui/icons-material/ThumbUp";
import ThumbsDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";

const ViewPostSidePage = ({ post }) => {
  return (
    <div>
      <div className="title">{post.title}</div>
      <div className="time">{new Date(post.timestamp).toLocaleDateString("en-us")}</div>
      <img className="picture" src={post.image} />
      <div className="body">{post.body}</div>
      <div className="counts">
        <IconButton>
          <ThumbsUpIcon />
        </IconButton>
        <div className="supportcount">{post.supports.length}</div>
        <IconButton>
          <ThumbsDownIcon />
        </IconButton>
        <div className="opposecount">{post.opposes.length}</div>
      </div>
    </div>
  );
};

export default ViewPostSidePage;
