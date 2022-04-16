import asyncHandler from "express-async-handler";
import { User } from "../../models/User";
import sharp from "sharp";

/**
 * @description
 * @access     Public
 * @route      POST /signUp
 */
export const signUpController = asyncHandler(async (req, res) => {
  const { fullName, username, email, password, confirmPassword } = req.body;
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
      // Resize the profile picture and convert it to a png
      const profilePicture = await sharp(req.file.buffer)
        .png()
        .resize(200, 200, { fit: sharp.fit.inside, withoutEnlargement: true })
        .toBuffer();
      // Encode the picture to base64 and store it in db

      const encoded = profilePicture.toString("base64");

      const newUser = new User({
        fullName,
        username,
        email,
        password,
        profilePicture: encoded,
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
