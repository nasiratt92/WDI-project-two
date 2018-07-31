const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  filmName: {type: String, required: true},
  quotes: [{type: String}],
  coverPic: String,
  releaseYear: Number,
  IMDbRating: Number,
  genres: [{type: String}]
});
module.exports = mongoose.model('Movie', movieSchema);
