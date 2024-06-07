import mongoose from "mongoose";

export const connectToMongo = () => {
  try {
    mongoose.connect(process.env.mongo_db);
    console.info("Connected the the database 🔥");
  } catch (error) {
    console.error(error);
  }
};
