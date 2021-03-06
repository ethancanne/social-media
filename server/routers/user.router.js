import express from "express";
//import the user controller
import { signInController } from "../controllers/user/signIn.controller";
import { signUpController } from "../controllers/user/signUp.controller";
import { getUserController } from "../controllers/user/getUser.controller";
import { getAllUsersController } from "../controllers/user/getAllUsers.controller";
import { toggleFollowerController } from "../controllers/user/toggleFollower.controller";
import { getFollowersController } from "../controllers/user/getFollowers.controller";
import { getFollowingController } from "../controllers/user/getFollowing.controller";
import { searchUsersController } from "../controllers/user/searchUsers.controller";
import { editProfileController } from "../controllers/user/editProfile.controller";
import { changePasswordController } from "../controllers/user/changePassword.controller";
import { toggleDarkModeController } from "../controllers/user/toggleDarkMode.controller";
//import middleware
const { authenticate } = require("../middleware/auth.middleware");
const { uploadImage } = require("../middleware/uploadImage.middleware");
//create an express router for the user routes
const router = express.Router();
import routes from "./routes";

/**
 * @description Sign In User Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.User.SignIn).post(signInController);

/**
 * @description Sign Up User Route
 * @access      Public
 * @route       POST /api/signUp
 * @COMMENTS
 */
router
  .route(routes.User.SignUp)
  .post(uploadImage.single("profilePicture"), signUpController);

/**
 * @description Get All Users Route
 * @access      Public
 * @route       POST /api/getUser/:id
 * @protected
 * @COMMENTS
 */
router.route(routes.User.GetAllUsers).get(authenticate, getAllUsersController);

/**
 * @description Get User Route
 * @access      Public
 * @route       POST /api/getUser/:id
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.GetUser + "/:username")
  .get(authenticate, getUserController);

/**
 * @description Add Friend Route
 * @access      Public
 * @route       POST /api/addFriend/:id
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.ToggleFollower + "/:id")
  .post(authenticate, toggleFollowerController);

/**
 * @description Get followers Route
 * @access      Public
 * @route       Get /api/getFollowers/:id
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.GetFollowers + "/:id")
  .get(authenticate, getFollowersController);

/**
 * @description Get following Route
 * @access      Public
 * @route       Get /api/getFollowers/:id
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.GetFollowing + "/:id")
  .get(authenticate, getFollowingController);

/**
 * @description Search for users
 * @access      Private
 * @route       Get /api/search/users
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.SearchUsers + "/:searchTerm")
  .get(authenticate, searchUsersController);

/**
 * @description Edit Profile Route
 * @access      Private
 * @route       Get /api/editProfile
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.EditProfile)
  .put(
    authenticate,
    uploadImage.single("profilePicture"),
    editProfileController
  );

/**
 * @description Change Password Route
 * @access      Private
 * @route       Get /api/changePassword
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.ChangePassword)
  .put(authenticate, changePasswordController);

/**
 * @description Toggle dark mode route
 * @access      Private
 * @route       Get /api/toggleDarkMode
 * @protected
 * @COMMENTS
 */
router
  .route(routes.User.ToggleDarkMode)
  .put(authenticate, toggleDarkModeController);

export default router;
