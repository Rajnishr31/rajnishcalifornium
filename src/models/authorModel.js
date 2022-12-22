const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    authorName : String,
    rating: Number,
    age: Number,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("newAuthor", authorSchema);
