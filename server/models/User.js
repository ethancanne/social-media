//create a mongoose model for the user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://res.cloudinary.com/dzqzjzjqw/image/upload/v1589788981/default_profile_picture_xqjqjy.png",
  },
  bio: {
    type: String,
    default: "I am a new user",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.methods.verifyPassword = function (password) {
  return this.password === password;
};

userSchema.methods.removeSensitiveAttributes = function () {
  delete this.password;
};

userSchema.methods.generateToken = function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "7 days",
    }
  );

  return token;
};

export const User = mongoose.model("User", userSchema);
