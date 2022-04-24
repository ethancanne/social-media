import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const getFollowingPostsController = asyncHandler(async (req, res) => {
  const errors = [];
  const {id} = req.params;
  try {
    //Create the post in the database using the Post model, and save it
    //Send the post back to the client
    var posts = [];

    req.user.following.forEach( async (followingId)=>{
      const post = await Post.find({creator: followingId});
      return res.send({
        post,
        message: "All posts retrieved successfully",
      });
    })

    console.log(posts)

    
  } catch (err) { console.log(err)
    //Send errors
    return res.send({
      error: err,
    });
  }
});
