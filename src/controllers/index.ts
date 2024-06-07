import { NextFunction, Request, Response } from "express";
import Blog from "../models/index";
import { find, findById } from "../utils/db.utils";

export const createBlogPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, author, content } = req.body;
    const blog = await Blog.create({
      title: title,
      author: author,
      content: content,
    });
    if (blog) {
      res.status(201).json(blog);
    }
  } catch (error) {
    next(error);
  }
};

export const getBlogPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogs = find(Blog);
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogPostsById = async (req: Request, res: Response) => {
  const id = req.params.postId;
  try {
    const blog = await findById(Blog, id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).send("Blog not found");
  }
};
