import asyncHandler from "express-async-handler";
import User from "../../models/User";

/**
 * @description
 * @access     Public
 * @route      POST /signIn
 */
export const signInController = asyncHandler(async (req, res) => {
  //Grab the user record from the database
  const user = await User.findOne({ email: req.body.email });

  //TODO: Verify the password from the request body and verify it matches the password in the database
  const passwordIsCorrect = user.verifyPassword(req.body.password);
  //If the password is correct, create a token for the user
  user.removeSensitiveAttributes();

  if (passwordIsCorrect) {
    const token = User.generateToken();
    //Send the token to the client
    return res.send({ newUser, token });
  }
});
