import express, { Express, Router } from "express";

import posts_controller from "../../controllers/v1/posts.controller";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: 'uploads/', // Set the destination directory for uploaded files
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage }); 

const posts_routes: Router = express.Router();

posts_routes.get("/", posts_controller.getAllPosts)
posts_routes.get("/:postId", posts_controller.getSinglePost)
posts_routes.post("/add-post", upload.single("postImage"), posts_controller.addPost);

export default posts_routes;
