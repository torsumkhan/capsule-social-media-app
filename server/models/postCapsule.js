//Import mongoose to create a mongoose schema
//From the docs - everything in mongoose starts with a schema
import mongoose from "mongoose";

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

const postCapsule = mongoose.model("postCapsule", capsuleSchema);

export default postCapsule;
