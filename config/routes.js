const express = require('express');
const router = express.Router();

// Controllers
const movieController = require('../controllers/movieController');





// routes
router.route('/')
  .get(movieController.recent);

router.get('/about', (req, res) => res.render('pages/_about'));

router.route('/movies')
  .get(movieController.index)
  .post(movieController.create);

router.route('/movies/new')
  .get(movieController.new);

router.route('/movies/:id/edit')
  .get(movieController.edit);

router.route('/movies/:id')
  .get(movieController.show)
  .put(movieController.update)
  .delete(movieController.delete);


// I think I need a post and get here




module.exports = router;
