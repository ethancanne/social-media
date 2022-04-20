//create post model with mongoose schema and export it
//The post should have a title, content, image, and creator, number of supports, and number of opposes.
//The creator should be a reference to the user who created the post.

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
      user: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
  opposes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;