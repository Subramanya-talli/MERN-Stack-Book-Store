const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: String,
    required: true,
  }},
  {
    timestamps: true,
  },
);

const BookSchema = mongoose.model("Books", bookSchema);

module.exports = BookSchema;
