import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      unique: true
    },
    numViews: {
      type: Number,
      default: 0
    },
    isLiked: {
      type: Boolean,
      default: false
    },
    isDisliked: {
      type: Boolean,
      default: false
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    image: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
    },
    author: {
      type: String,
      default: "Admin"
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
);

//Export the model
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
