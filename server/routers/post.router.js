import express from "express";

//import the post controllers
import { createPostController } from "../controllers/post/createPost.controller.js";
import { getUserPostsController } from "../controllers/post/getUserPosts.controller.js";
import { getAllPostsController } from "../controllers/post/getAllPosts.controller.js";
import { getFollowingPostsController } from "../controllers/post/getFollowingPosts.controller.js";
import { getPostController } from "../controllers/post/getPost.controller.js";
import { deletePostController } from "../controllers/post/deletePost.controller.js";
import { supportPostController } from "../controllers/post/supportPost.controller.js";
import { opposePostController } from "../controllers/post/opposePost.controller.js";

//create an express router for the user routes
const router = express.Router();
import routes from "./routes";
import { searchPostsController } from "../controllers/post/searchPosts.controller.js";

//import the auth middleware
const { authenticate } = require("../middleware/auth.middleware");

/**
 * @description Create Post Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.CreatePost).post(authenticate, createPostController);

/**
 * @description Get all the posts of the logged in user route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router
  .route(routes.Post.GetUserPosts)
  .get(authenticate, getUserPostsController);

/**
 * @description Get following posts Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router
  .route(routes.Post.GetFollowingPosts)
  .get(authenticate, getFollowingPostsController);

/**
 * @description Get Post Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.GetPost+"/:id").get(authenticate, getPostController);

/**
 * @description Get All Posts Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.GetAllPosts).get(authenticate, getAllPostsController);

/**
 * @description Get All Posts Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router
  .route(routes.Post.GetFollowingPosts)
  .get(authenticate, getFollowingPostsController);

/**
 * @description Remove Post Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.DeletePost).delete(authenticate, deletePostController);

/**
 * @description Support Post Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.SupportPost).put(authenticate, supportPostController);

/**
 * @description Oppose Post Route
 * @access      Public
 * @route       POST /api/signIn
 * @COMMENTS
 */
router.route(routes.Post.OpposePost).put(authenticate, opposePostController);

/**
 * @description Search for posts
 * @access      Private
 * @route       Get /api/search/posts
 * @protected
 * @COMMENTS
 */
router.route(routes.Post.SearchPosts+"/:searchTerm").get(authenticate, searchPostsController);

export default router;
