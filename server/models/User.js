//create a mongoose model for the user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  isDarkModeEnabled: {
    type: Boolean,
    default: false,
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

userSchema.methods.toJSON = function () {
  var userObject = this.toObject();
  delete userObject.password;
  return userObject;
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

//Populate posts and followers, and following and remove sensitive data
userSchema.pre("find", function () {
  // this.populate('posts');
  // this.populate("followers");
  // this.populate("following");
});

export const User = mongoose.model("User", userSchema);
