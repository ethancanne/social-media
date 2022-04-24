import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const createPostController = asyncHandler(async (req, res) => {
  const {title,content,image} = req.body;
  const errors = [];
  try {
    //Create the post in the database using the Post model, and save it
    //Send the post back to the client
    const newPost = new Post({
      title,
      content,
      image,
      creator:req.user,
      });

      await newPost.save();

    return res.send({
      post: newPost,
      message: "Post created successfully",
    });

  } catch (err) { console.log(err)
    //Send errors
    return res.send({
      error: err,
    });
  }
});
