import React from "react";
import "./ViewPostSidePage.scss";
import PostActions from "../../../components/post/PostActions";
import ProfilePicture from "../../../components/profilePicture/ProfilePicture";

const ViewPostSidePage = ({ post }) => {
  return (
    <>
      <div className='post-view-container'>
        <div className='title'>{post.title}</div>

        <img
          className='picture'
          src={"data:image/png;charset=utf-8;base64," + post.image}
        />
        <div className='body'>{post.content}</div>
        <div className='counts'>
          <PostActions post={post} />
        </div>
      </div>
      <div className='creator-info'>
        <div className='creator-name'>{post.creator.name}</div>
        <div className='creator-left'>
          <div className='creator-profile-picture'>
            <ProfilePicture
              image={post.creator.profilePicture}
              name={post.creator.fullName}
              isBase64={true}
            />
          </div>
          <h1 className='creator-full-name'>{post.creator.fullName}</h1>
          <div className='creator-username'>@{post.creator.username}</div>
        </div>
        <div className='creator-right'>
          <div className='post-timestamp'>
            {new Date(post.createdAt).toLocaleDateString("en-us")}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPostSidePage;
