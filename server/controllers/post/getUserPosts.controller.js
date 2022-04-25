import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const getUserPostsController = asyncHandler(async (req, res) => {
  const errors = [];
  const { id } = req.params;
  try {
    const posts = await Post.find({ creator: id });

    return res.send({
      posts,
      message: "Post retrieved successfully",
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
