import React from 'react'

const Post = ({ post }) => {
    return (
        <div>
            <div className="postTitle">Title: {post.title}</div>
            <img className="postImage" src={post.image} alt />
            <div className="postBody">{post.body}</div>
            <button className="supports">Supports {post.supports}</button>
            <button className="opposes">Opposes {post.opposes}</button>

        </div>
    )
}

export default Post