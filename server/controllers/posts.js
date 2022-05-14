//Create handlers for the routes

//import postCapsule from the models folder
import postCapsule from "../models/postCapsule.js";

//Reference - https://nodejs.org/en/knowledge/errors/what-is-try-catch/ - Each callback function should have a try and catch block
export const getPosts = async (req, res) => {
  try {
    const allPosts = await postCapsule.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ text: error.message });
  }
};

//Reference - https://rahmanfadhil.com/express-rest-api/ - How to create the post
export const createCapsule = async (req, res) => {
  const post = req.body;
  const newPost = new PostCapsule(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ text: error.message });
  }
};
