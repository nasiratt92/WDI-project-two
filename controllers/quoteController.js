const Movie = require('../models/movie');

function quotesIndex(req, res) {
  Movie
    .find() // All the movies!
    .then(movies =>  {
      const quotes =  movies.reduce((arr, movie) => {
        return arr.concat(movie.quotes);
      },[]);

      res.render('quotes/index', {quotes});
    })
    .catch(err => console.log('Error collecting quotes', err));
}
function quotesNew(req, res) {
  const filmId = req.params.id;
  res.render('quotes/new', {filmId});
}
function quotesCreate(req, res) {
  console.log(req.params.id);
  Movie
    .findById(req.params.id)
    .then(movie =>  {
      console.log(movie);
      movie.quotes.push(req.body);
      return movie.save();
    })
    .then(() => res.redirect(`/movies/${req.params.id}`));

}


module.exports = {
  index: quotesIndex,
  new: quotesNew,
  create: quotesCreate
};
