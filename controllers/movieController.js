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
  console.log('req.body is empty!!', req.body);
  Movie
    .create(req.body)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('Error creating movie', err));
}

module.exports = {
  show: moviesShow,
  index: moviesIndex,
  new: moviesNew,
  create: moviesCreate
};
