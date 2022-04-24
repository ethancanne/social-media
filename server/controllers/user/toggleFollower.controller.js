//Make a controller that will add a follower to a user
import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

// /**
//  * @description A controller that will add a user as a follower to the logged in user
//  * @access     Public
//  * @route      POST /AddFollower/:id
//  */
export const toggleFollowerController = asyncHandler(async (req, res) => {
  try {
    //retrieve all users from the database
    const follower = await User.findById(req.params.id);
    var message = "";

    //If the user is already following this user remove the follower from the logged in user's following array
    if (req.user.following.includes(follower._id)) {
      req.user.following = req.user.following.filter(
        user => user === follower._id
      );
      follower.followers = follower.followers.filter(
        user => user === req.user._id
      );
      message = "You are no longer following " + follower.username;
      console.log("unfollowing");
    } else {
      req.user.following = req.user.following.concat(follower._id);
      follower.followers = follower.followers.concat(req.user._id);
      message = "You are now following " + follower.username;
      console.log("following");
    }

    await follower.save();
    await req.user.save();

    //Send the user to the client
    return res.send({
      message,
      user: req.user,
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
