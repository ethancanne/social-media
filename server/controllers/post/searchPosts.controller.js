import asyncHandler from "express-async-handler";
// import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const searchPostsController = asyncHandler(async (req, res) => {
  const { searchTerm } = req.body;
  const errors = [];
  try {
    //Search for posts using the search term
    const posts = await Post.find({
      $or: [
        {
          title: {
            $regex: searchTerm,
            $options: "i",
          },
        },
      ],
    });

    return res.send({
      posts,
      message: "Posts retrieved successfully",
    });
  } catch (err) {
    //Send errors
    return res.send({
      error: err,
    });
  }
});
