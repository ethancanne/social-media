import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const getPostController = asyncHandler(async (req, res) => {
  const errors = [];
  const {id} = req.params;
  try {
    //Create the post in the database using the Post model, and save it
    //Send the post back to the client
    const post = await Post.findById(id);

    return res.send({
      post: post,
      message: "Post retrieved successfully",
    });
  } catch (err) { console.log(err)
    //Send errors
    return res.send({
      error: err,
    });
  }
});
