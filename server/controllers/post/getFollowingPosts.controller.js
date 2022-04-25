import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will get all the posts of the users the logged in user is following
//  * @access     Private
//  * @route      GET /getFollowingPosts
//  */
export const getFollowingPostsController = asyncHandler(async (req, res) => {
  try {
    var followingPosts = [];

    for (var i = 0; i < req.user.following.length; i++) {
      const userPosts = await Post.find({ creator: req.user.following[i] });
      followingPosts = followingPosts.concat(userPosts);
    }

    return res.send({
      posts: followingPosts,
      message: "All posts retrieved successfully",
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err.message || err,
    });
  }
});
