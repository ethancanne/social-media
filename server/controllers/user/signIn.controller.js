import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

/**
 * @description
 * @access     Public
 * @route      POST /signIn
 */
export const signInController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    //Grab the user record from the database
    const user = await User.findOne({ email });

    //TODO: Verify the password from the request body and verify it matches the password in the database
    const passwordIsCorrect = user.verifyPassword(password);

    //Remove sensitive data from the user object
    user.removeSensitiveAttributes();

    //If the password is correct, create a token for the user
    if (passwordIsCorrect) {
      const token = user.generateToken();
      //Send the token and user to the client
      return res.send({ user, token });
    }
  } catch (err) {
    console.log(err);
    //Send errors
    return res.status(400).send({
      error: err,
    });
  }
});
