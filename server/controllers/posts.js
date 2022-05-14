//Create handlers for the routes

//import postCapsule from the models folder
import postCapsule from "../models/postCapsule.js";

//Reference - https://nodejs.org/en/knowledge/errors/what-is-try-catch/ - Each callback function should have a try and catch block
export const getCapsules = async (req, res) => {
  try {
    const allPosts = await postCapsule.find(); //.find() gets all the posts
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ text: error.message });
  }
};

//Reference - https://rahmanfadhil.com/express-rest-api/ - How to create the post
export const createCapsule = async (req, res) => {
  const post = req.body; //req.body will be used to get all data to create a capsule.
  const newCapsule = new PostCapsule(post);
  try {
    await newCapsule.save();
    res.status(201).json(newCapsule);
  } catch (error) {
    res.status(404).json({ text: error.message });
  }
};
