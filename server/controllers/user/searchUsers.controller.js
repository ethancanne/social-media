//Make a controller that will retrieve a user from the database and send it back to the client from the id in the request

import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

// /**
//  * @description
//  * @access     Public
//  * @route      POST /signUp
//  */
export const searchUsersController = asyncHandler(async (req, res) => {
  try {
    //Retrieve the users from the database

    //Send the users to the client
    return res.send({ users });
  } catch (err) {
    console.log("ERROR: ", err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
