import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

/**
 * @description
 * @access     Public
 * @route      POST /signIn
 */
export const signInController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const errors = [];

  try {
    //Grab the user record from the database
    const user = await User.findOne({ email });
    if (!user) throw "User with this email does not exist";
    //Verify the password from the request body and verify it matches the password in the database
    const passwordIsCorrect = user.verifyPassword(password);
    if (!passwordIsCorrect) throw "Password is incorrect";

    //Create a token for the user
    const token = user.generateToken();

    //Send the user and token to the client
    return res.send({ user, token });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.status(400).send({
      error: err,
    });
  }
});
