import { NextFunction, Request, Response } from "express";
import Blog from "../models/index";
import { deleteOne, find, findById, updateBlog } from "../utils/db.utils";
import { createblogSchema, updateBlogSchema } from "../validations/index";

export const createBlogPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, author, content } = req.body;
    const { error } = createblogSchema.validate({
      title,
      content,
      author,
    });
    if (error) {
      next(error);
    }
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
    const blogs = await find(Blog);
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

export const removeBlogPostById = async (req: Request, res: Response) => {
  const id = req.params.postId;
  try {
    const data = await deleteOne(Blog, id);
    if (data) res.status(204).json(data);
  } catch (error) {
    res.status(404).send("Not found");
  }
};

export const updateBlogPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.postId;
  const { title, content } = req.body;

  const { error } = updateBlogSchema.validate({
    title,
    content,
  });
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  try {
    const blog = await updateBlog(Blog, id, req);
    if (blog) res.status(200).json(blog);
  } catch (error) {
    res.status(404).send("Not found");
  }
};
