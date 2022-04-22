// Make a controller to get all the users that a user is following
import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

export const getFollowingController = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    //Retrieve the user from the database
    const user = await User.findOne({ _id });

    //Populate the followers array
    await user.populate({ path: "following" });

    //Send the user to the client
    return res.send({ following: user.following });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
