const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  filmName: {type: String, required: true},
  favQoute: {type: String, required: true},
  coverPic: String,
  releaseYear: Number,
  IMDbRating: Number,
  genres: [{type: String}]
});
