import { Router } from "express";
import {
  createBlogPost,
  getBlogPosts,
  getBlogPostsById,
  removeBlogPostById,
  updateBlogPost,
} from "../controllers/index";

const router = Router();

router.route("/api/posts").post(createBlogPost).get(getBlogPosts);

router
  .route("/api/posts/:postId")
  .get(getBlogPostsById)
  .put(updateBlogPost)
  .delete(removeBlogPostById);

export default router;
