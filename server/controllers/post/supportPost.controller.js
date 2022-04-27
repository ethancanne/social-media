import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const supportPostController = asyncHandler(async (req, res) => {
  const errors = [];
  const { postId } = req.body;
  try {
    const post = await Post.findById(postId);
    var didAddSupport = false;

    if (post.supports.includes(req.user._id))
      post.supports = post.supports.filter(
        supportedUserId => supportedUserId.toString() != req.user._id.toString()
      );
    else {
      post.supports.push(req.user._id);
      didAddSupport = true;
    }
    await post.save();
    console.log(post.supports.length);

    return res.send({ post, didAddSupport });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
