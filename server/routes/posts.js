//All routes related to posts
import express from "express";

//Import the route handler
import {
  getCapsules,
  createCapsule,
  updateCapsule,
  deleteCapsule,
  likeCapsule,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getCapsules);
router.post("/", createCapsule);
router.patch("/:id", updateCapsule); //for editing, we need the id, thats why we use :id, : will mean its dynamic
router.delete("/:id", deleteCapsule);
router.patch("/:id/likePost", likeCapsule);

export default router;
