import asyncHandler from "express-async-handler";
import { Post } from "../../models/Post"; //TODO: Import the Post model

// /**
//  * @description A controller that will create a post in the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const opposePostController = asyncHandler(async (req, res) => {
  const errors = [];
  const { postId } = req.body;
  try {
    const post = await Post.findById(postId);
    var didAddOppose = false;
    //if the user has already opposes the post, remove the user from the opposes array, otherwise add the user to the opposes array
    if (post.opposes.includes(req.user._id))
      post.opposes = post.opposes.filter(
        opposedUserId => opposedUserId.toString() != req.user._id.toString()
      );
    else {
      post.opposes.push(req.user._id);
      didAddOppose = true;
    }

    console.log(post.opposes.length);

    await post.save();

    return res.send({ post, didAddOppose });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
