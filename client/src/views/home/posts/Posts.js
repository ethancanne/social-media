import "./Posts.scss";
import Post from "../../../components/post/Post";
import React, { useContext, useState } from "react";
import postsContext from "../../../context/posts/postsContext";
import Loading from "../../../components/loading/Loading";

const Posts = ({ title, posts }) => {
  const { isLoading } = useContext(postsContext);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className='posts-title'>{title}</h1>
          <div className='posts-container'>
            {posts.map(post => (
              <Post post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
