import express from "express";
import { signUpController } from "../controllers/user/signUp.controller";
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
router.route("/api/signIn").post(signInController);

router.route("").post(signUpController);

export default router;
