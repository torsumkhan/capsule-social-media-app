//All routes related to posts
import express from "express";

//Import the route handler
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

export default router;
