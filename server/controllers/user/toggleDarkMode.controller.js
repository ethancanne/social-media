//Make a controller that will toggle dark mode for a user
import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

export const toggleDarkModeController = asyncHandler(async (req, res) => {
  try {
    var message = "";

    //If the user already enabled dark mode, then disable on toggle

    req.user.isDarkModeEnabled = !req.user.isDarkModeEnabled;
    message =
      "Dark Mode is " + (req.user.isDarkModeEnabled ? "enabled" : "disabled");
    console.log(message);

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
