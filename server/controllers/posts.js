//Create handlers for the routes

//import postCapsule from the models folder

import mongoose from "mongoose";
import postCapsule from "../models/postCapsule.js";

//Reference - https://nodejs.org/en/knowledge/errors/what-is-try-catch/ - Each callback function should have a try and catch block
//To get all posts from the database

export const getImage = async (req, res) => {
  const { id } = req.params;
  const image = await postCapsule.findById(id, "title");
  console.log(image);
};

export const getCapsules = async (req, res) => {
  try {
    const allPosts = await postCapsule.find(); //.find() gets all the posts
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//To get a single post with the ID
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const singlePost = await postCapsule.findById(id);
    res.status(201).json(singlePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Reference - https://rahmanfadhil.com/express-rest-api/ - How to create the post
export const createCapsule = async (req, res) => {
  const post = req.body; //req.body will be used to get all data to create a capsule.
  const newCapsule = new postCapsule(post);
  try {
    await newCapsule.save();
    res.status(201).json(newCapsule);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Usually, the preferred HTTP method to do an update operation into a single record is PATCH - //Reference - https://rahmanfadhil.com/express-rest-api/ - How to create the post
export const updateCapsule = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedCapsule = await postCapsule.findByIdAndUpdate(_id, post, {
    new: true,
  });
  return res.json(updatedCapsule);
};

export const deleteCapsule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post with this ID does not exist.");

  await postCapsule.findByIdAndRemove(id);

  res.json({ message: "Deleted Successfully" });
};

export const likeCapsule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post with this ID does not exist");

  const capsule = await postCapsule.findById(id);
  const updatedCapsule = await postCapsule.findByIdAndUpdate(
    id,
    {
      like: capsule.like + 1,
    },
    { new: true }
  );
  res.json(updatedCapsule);
};
