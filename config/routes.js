const express = require('express');
const router = express.Router();

// Controllers
const movieController = require('../controllers/movieController');





// routes
router.get('/', (req, res) => res.render('pages/_home'));
router.get('/about', (req, res) => res.render('pages/_about'));

router.route('/movies')
  .get(movieController.index);

router.route('/movies/:id')
  .get(movieController.show);

module.exports = router;
