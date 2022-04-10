import asyncHandler from "express-async-handler";

/**
 * @description
 * @access     Public
 * @route      POST /signIn
 */
export const signInController = asyncHandler(async (req, res) => {
  //Grab the user record from the database
  const user = await User.findOne({ email: req.body.email });
  //TODO: Verify the password from the request body and verify it matches the password in the database

  return res.send({ status: "hdhfdhhdh" });
});
