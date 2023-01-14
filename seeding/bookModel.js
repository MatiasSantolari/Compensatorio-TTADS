const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('books', BookSchema);