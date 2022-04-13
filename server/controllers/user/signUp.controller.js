import asyncHandler from "express-async-handler";
import User from "../../models/User";

/**
 * @description
 * @access     Public
 * @route      POST /signIn
 */
export const signUpController = asyncHandler(async (req, res) => {
  if (req.body.password === req.body.confirmPassword) {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    newUser.save();

    const token = newUser.generateToken();
    return req.send(newUser, token);
  }
});
