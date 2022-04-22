import "./Posts.scss";
import Post from "../../../components/post/Post";
import React, { useState } from "react";

const Posts = ({ }) => {
  const posts = [
    {
      title: "Title",
      timestamp: Date.now(),
      image: "https://mui.com/static/images/cards/paella.jpg",
      body: "Some text but a lot more text that will hopefully show off the ability of a post to wrap text once it gets too long. They just need to be able to do that, plus it may look better with more words along with the spacing there is right now.",
      supports: 44,
      opposes: 12,
    },
    {
      title: "Title",
      timestamp: Date.now(),
      image: "https://mui.com/static/images/cards/paella.jpg",
      body: "Some text",
      supports: 44,
      opposes: 12,
    },
    {
      title: "Title",
      timestamp: Date.now(),
      image: "https://mui.com/static/images/cards/paella.jpg",
      body: "Some text",
      supports: 44,
      opposes: 12,
    },
  ];

  return (
    <div className='posts-container'>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
