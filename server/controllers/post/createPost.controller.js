import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model
import sharp from "sharp";

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const createPostController = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const errors = [];
  try {
    // Resize the profile picture and convert it to a png
    const image = await sharp(req.file.buffer)
      .png()
      .resize(300, 300)
      .toBuffer();

    // Encode the picture to base64 and store it in db
    const encoded = image.toString("base64");
    const newPost = new Post({
      title,
      content,
      image: encoded,
      creator: req.user,
    });

    await newPost.save();

    return res.send({
      post: newPost,
      message: "Post created successfully",
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
