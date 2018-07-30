const Movie = require('../models/movie');

function moviesIndex(req, res) {
  Movie
    .find() // All the movies!
    .then(movies => {
      res.render('movies/index', { movies });
    });
}


module.exports = {
  index: moviesIndex
};
