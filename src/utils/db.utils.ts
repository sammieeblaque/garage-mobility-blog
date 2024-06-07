import type { Models } from "mongoose";

export const find = (model: any) => model.find({}).sort({ created: -1 });

export const findById = (model: any, id: string) => model.findOne({ _id: id });

export const deleteOne = (model: any, id: string) =>
  model.findOneAndDelete({ _id: id });

export const updateBlog = (model, id, req) =>
  model.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true });
