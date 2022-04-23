import asyncHandler from "express-async-handler";
import { User } from "../../models/User";
import sharp from "sharp";

/**
 * @description
 * @access     Public
 * @route      POST /signUp
 */
export const editProfileController = asyncHandler(async (req, res) => {
  const requestedUpdates = Object.keys(req.body);
  const vaildUpdates = [
    "fullName",
    "username",
    "email",
    "bio",
    "profilePicture",
  ];
  const isVaildUpdates = requestedUpdates.every(update =>
    vaildUpdates.includes(update)
  );

  if (!isVaildUpdates) {
    return res.send({ error: "Invalid updates!" });
  }
  try {
    // If a profile picture is provided
    if (req.file) {
      const profilePicture = await sharp(req.file.buffer)
        .png()
        .resize(200, 200, { fit: sharp.fit.inside, withoutEnlargement: true })
        .toBuffer();
      // Encode the picture to base64 and store it in db

      const encoded = profilePicture.toString("base64");
      req.user.profilePicture = encoded;
    }
    requestedUpdates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();

    return res.send({
      user: req.user,
      message: "Profile edited successfully!",
    });
  } catch (err) {
    console.log(err);
    //Send errors
    return res.send({
      error: err,
    });
  }
});
