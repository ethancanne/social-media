//Make a controller that will retrieve a user from the database and send it back to the client from the id in the request

import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

// /**
//  * @description
//  * @access     Public
//  * @route      POST /signUp
//  */
export const getUserController = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    console.log("HERE");
    //Retrieve the user from the database
    const user = await User.findOne({ _id });

    //Send the user to the client
    return res.send({ user });
  } catch (err) {
    console.log("ERROR: ", err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
