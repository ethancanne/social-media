// Make a controller to get all the followers of a user
import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

export const getFollowersController = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    //Retrieve the user from the database
    const user = await User.findOne({ _id });

    //Populate the followers array
    await user.populate({ path: "followers" });

    //Send the user to the client
    return res.send({ followers: user.followers });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
