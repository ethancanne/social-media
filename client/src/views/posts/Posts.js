import "./Posts.scss";
import Post from "../../components/post/Post";
import React, { useState } from "react";

const Posts = ({ }) => {


    const posts = [{ title: "Title", body: "Some text", supports: 44, opposes: 12 }]
    return (
        <div className="PostsContainer">
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Posts