import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import compression from "compression";
// import routes from "../routes";

const app: Express = express();

app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", routes);

export default app;
