const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

exports.User = User;