const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  authors: { type: String, required: true },
  commentsID: [{ type: mongoose.ObjectId, ref: "Comment" }],
  favorites: [{ type: mongoose.ObjectId, ref: "User" }],
  imagen: { type: String, required: true },
});

const Title = mongoose.model("Title", comicSchema);

exports.Title = Title;
