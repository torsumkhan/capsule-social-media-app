//All routes related to posts
import express from "express";

//Import the route handler
import { getCapsules, createCapsule } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getCapsules);
router.post("/", createCapsule);

export default router;
