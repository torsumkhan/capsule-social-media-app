//All routes related to posts
import express from "express";

//Import the route handler
import {
  getCapsules,
  createCapsule,
  updateCapsule,
  deleteCapsule,
  likeCapsule,
  getPost,
  getImage,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getCapsules);
router.get("/:id", getPost);
router.get("/:id", getImage);

router.post("/", createCapsule);
router.put("/:id", updateCapsule);
router.delete("/:id", deleteCapsule);
router.patch("/:id/likePost", likeCapsule);

export default router;
