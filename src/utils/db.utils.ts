import type { Models } from "mongoose";

export const find = (model: any) => model.find({}).sort({ created: -1 });

export const findById = (model: any, id: any) => model.findOne({ _id: id });
