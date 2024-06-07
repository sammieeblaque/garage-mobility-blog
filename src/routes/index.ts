import { Router } from "express";
import { createBlogPost, getBlogPosts } from "../controllers/index";

const router = Router();

router.route("/api/posts").post(createBlogPost).get(getBlogPosts);

router.route("/api/posts/:postId").get().put().delete();

export default router;
