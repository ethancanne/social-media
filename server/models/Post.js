//create post model with mongoose schema and export it
//The post should have a title, content, image, and creator, number of supports, and number of opposes.
//The creator should be a reference to the user who created the post.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  supports: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  opposes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

postSchema.pre("find", function () {
  this.populate({ path: "creator" });
});

export const Post = mongoose.model("Post", postSchema);
