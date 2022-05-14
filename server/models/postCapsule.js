//Import mongoose to create a mongoose schema
//From the docs - everything in mongoose starts with a schema
import mongoose from "mongoose";

//To create the model, first we need to develop the schema

//Reference: https://mongoosejs.com/docs/guide.html - How to create schema
const { Schema } = mongoose;

const capsuleSchema = new Schema({
  title: String,
  text: String,
  tags: [String],
  selectFile: String,
  like: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Reference: https://mongoosejs.com/docs/models.html - How to create model from schema
const postCapsule = mongoose.model("postCapsule", capsuleSchema);

export default postCapsule;
