import express from "express";
//import the user controller
import { signInController } from "../controllers/user/signIn.controller";
import { signUpController } from "../controllers/user/signUp.controller";
import { getUserController } from "../controllers/user/getUser.controller";
import { getAllUsersController } from "../controllers/user/getAllUsers.controller";

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
router.route(routes.User.GetUser + "/:id").get(authenticate, getUserController);

export default router;
