const express = require('express');
const router = express.Router();

// Controllers
const movieController = require('../controllers/movieController');
const quoteController = require('../controllers/quoteController');





// routes
router.route('/')
  .get(movieController.recent);

router.get('/about', (req, res) => res.render('pages/_about'));

router.route('/movies')
  .get(movieController.index)
  .post(movieController.create);

router.route('/quotes')
  .get(quoteController.index);
// .post(movieController.create);

router.route('/movies/new')
  .get(movieController.new);

router.route('/movies/:id/edit')
  .get(movieController.edit);

router.route('/movies/:id')
  .get(movieController.show)
  .put(movieController.update)
  .delete(movieController.delete);

router.route('/movies/:id/quotes/new')
  .get(quoteController.new);

router.route('/movies/:id/quotes')
  .post(quoteController.create);

router.route('/movies/:id/quotes/:quoteId')
  .delete(quoteController.delete);

// I think I need a post and get here




module.exports = router;
