import joi from "joi";

export const createblogSchema = joi.object({
  title: joi.string().min(5).label("title").required(),
  author: joi.string().min(5).label("author").required(),
  content: joi.string().min(5).label("content").required(),
});
export const updateBlogSchema = joi.object({
  title: joi.string().min(5).label("title").required(),
  content: joi.string().min(5).label("content").required(),
});
