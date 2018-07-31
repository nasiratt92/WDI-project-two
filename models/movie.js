const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  filmName: {type: String, required: true},
  quotes: String,
  coverPic: String,
  releaseYear: Number,
  IMDbRating: Number,
  genres: [{type: String}]
}, { timestamps: true });
module.exports = mongoose.model('Movie', movieSchema);
