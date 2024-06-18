import express, { Express } from "express";
import posts_routes from "./posts.routes";

const v1Routes = express.Router();

v1Routes.use("/posts", posts_routes);

export default v1Routes;
