import mongoose from "mongoose";

export const connectToMongo = () => {
  try {
    mongoose.connect(
      "mongodb+srv://odianoseairehrour:QjJHnKuzm011ldTZ@cluster0.gwz0cz9.mongodb.net/blog"
    );
    console.info("Connected the the database 🔥");
  } catch (error) {
    console.error(error);
  }
};
