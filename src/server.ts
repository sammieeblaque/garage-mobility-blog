import { Request, Response } from "express";
import app from "./app/index";
import { connectToMongo } from "./config/db.config";

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});

connectToMongo();

const port = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
