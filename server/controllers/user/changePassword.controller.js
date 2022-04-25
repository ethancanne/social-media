//create a controller to change the password of a user
import asyncHandler from "express-async-handler";
/**
 * @description
 * @access     Public
 * @route      POST /api/changePassword
 */
export const changePasswordController = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  const errors = [];
  if (!currentPassword || !newPassword || !confirmNewPassword)
    errors.push("Please provide all the fields!");

  if (newPassword !== confirmNewPassword)
    errors.push("Passwords do not match!");

  if (currentPassword !== req.user.password)
    errors.push("Current password is incorrect!");

  try {
    if (errors.length > 0) throw errors;

    req.user.password = newPassword;
    await req.user.save();

    return res.send({
      user: req.user,
      message: "Password changed successfully!",
    });
  } catch (err) {
    console.log(err);

    //Send errors
    return res.send({
      error: err.message || err,
    });
  }
});
