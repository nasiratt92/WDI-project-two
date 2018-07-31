const Movie = require('../models/movie');

function moviesIndex(req, res) {
  Movie
    .find() // All the movies!
    .then(movies => {
      res.render('movies/index', { movies });
    });
}
function moviesShow(req, res) {

  Movie
    .findById(req.params.id)
    .then(movie => res.render('movies/show', { movie }));
}
function moviesNew(req, res) {
  res.render('movies/new');
}
function moviesCreate(req, res){
  Movie
    .create(req.body)
    .then(() => res.redirect('/movies'));
}

module.exports = {
  show: moviesShow,
  index: moviesIndex,
  new: moviesNew,
  create: moviesCreate
};
