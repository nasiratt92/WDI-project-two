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
function quotesDelete(req, res, next) {
  Movie
    .findById(req.params.id)
    .then(movie => {
      console.log(movie);
      const commentIdToDelete = req.params.quoteId;
      // this should have a check here to check the user is the one who commented in the first place
      movie.quotes = movie.quotes.filter(quote => quote.id !== commentIdToDelete
      );
      return movie.save();
    })
    .then(movie => res.redirect(`/movies/${movie.id}`))
    .catch(next);
}

module.exports = {
  index: quotesIndex,
  new: quotesNew,
  create: quotesCreate,
  delete: quotesDelete
};
