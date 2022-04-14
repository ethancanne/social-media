import express from "express";
import { signUpController } from "../controllers/user/signUp.controller";
import routes from "./routes";
//create an express router for the user routes
const router = express.Router();

//import the auth middleware
const { authenticate } = require("../middleware/auth.middleware");
//import the user controller
const { signInController } = require("../controllers/user/signIn.controller");

/**
 * @description Upload video route
 * @access      Public
 * @route       POST /upload
 * @COMMENTS
 */
router.route(routes.User.SignIn).post(signInController);

router.route(routes.User.SignUp).post(signUpController);

export default router;
