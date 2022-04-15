import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

// /**
//  * @description A controller that will retrieve all users from the database and send it back to the client
//  * @access     Public
//  * @route      GET /getAllUsers
//  */
export const getAllUsersController = asyncHandler(async (req, res) => {
  try {
    //retrieve all users from the database
    const users = await User.find({});

    //Send the user to the client
    return res.send(users);
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
