//Make a controller that will add a follower to a user
import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

// /**
//  * @description A controller that will add a user as a follower to the logged in user
//  * @access     Public
//  * @route      POST /AddFollower/:id
//  */
export const addFollowerController = asyncHandler(async (req, res) => {
  try {
    //retrieve all users from the database
    const follower = await User.findById(req.params.id);
    req.user.following = req.user.following.concat({ user: follower._id });
    follower.followers = follower.followers.concat({ user: follower._id });

    await follower.save();
    await req.user.save();

    //Send the user to the client
    return res.send({
      message: `${req.user.username} is now following ${follower.username}`,
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
