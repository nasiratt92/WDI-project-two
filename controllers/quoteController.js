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




//       const quotes = movies.(movie => movie.quote);
//       res.render('movies/quotes', { quotes });
//     });
// }

module.exports = {
  index: quotesIndex
};
