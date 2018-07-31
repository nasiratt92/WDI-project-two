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
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('Error creating movie', err));
}
function moviesEdit(req, res){
  Movie
    .findById(req.params.id)
    .then(movie => res.render('movies/edit', {movie}))
    .catch(err => console.log('Error editing movie', err));
}
function moviesUpdate(req, res){
  Movie
    .findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.redirect(`/movies/${movie.id}`))
    .catch(err => console.log('Error updating movie', err));
}
function moviesDelete(req, res){
  Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('Error deleting movie', err));
}

module.exports = {
  show: moviesShow,
  index: moviesIndex,
  new: moviesNew,
  create: moviesCreate,
  edit: moviesEdit,
  update: moviesUpdate,
  delete: moviesDelete
};
