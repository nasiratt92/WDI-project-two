const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Project-2');

const Movie = require('../models/movie');

Movie.collection.drop();

Movie
  .create([
    {filmName: 'Kung fu Panda',
      quotes: [
        'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called present.',
        'Stop calling me Panda-eyes!'
      ],
      coverPic: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_CR0,0,689,1000_AL_.jpg',
      releaseYear: 2008,
      IMDbRating: 7.6,
      genres: ['Animation', 'Action', 'Adventure', 'Comedy', 'Family', 'Thriller']},
    {filmName: 'The Matirix',
      quotes: ['What you know you cant explain, but you feel it. Youve felt it your entire life, that there is something wrong with the world. You dont know what it is, but it is there, like a splinter in your mind, driving you mad.'],
      coverPic: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
      releaseYear: 1999,
      IMDbRating: 8.7,
      genres: ['Action','Sci-Fi']}
  ])
  .then(movies => console.log(`created ${movies.length} movies`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
