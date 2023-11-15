const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: mongoose.ObjectId, ref: "User", required: true },
  moderate: Boolean,
});

const Comment = mongoose.model("Comment", commentSchema);

exports.Comment = Comment;
