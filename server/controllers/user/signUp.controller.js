import asyncHandler from "express-async-handler";
import { User } from "../../models/User";

/**
 * @description
 * @access     Public
 * @route      POST /signUp
 */
export const signUpController = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  const errors = [];

  try {
    //VALIDATE THE REQUEST
    //Check if passwords match
    const passwordsMatch = password === confirmPassword;
    if (!passwordsMatch) errors.push("Passwords do not match");
    //Check if there is a user with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) errors.push("User with this email already exists");

    //If there were no errors
    if (errors.length === 0) {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });

      await newUser.save();

      const token = newUser.generateToken();
      return res.send({
        user: newUser,
        token,
        message: "User created successfully!",
      });
    } else {
      throw errors;
    }
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
