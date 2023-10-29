const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// Route to find all movies
router.get('/', movieController.findAllMovies);

// Route to find movies by status (PUBLISHED or RELEASED)
// router.get('/movies/status/:status', movieController.findAllMoviesByStatus);

// Route to find a movie by its ID
router.get('/:movieId', movieController.findOne);

// Route to find movies with show
router.get('/:movieId/shows', movieController.findShows);




//////////////////////
// Route to find all movies
// router.get('/movies', movieController.findAllMovies);

// Route to find movies by status (PUBLISHED or RELEASED)
router.get('/status/:status', movieController.findMoviesByStatus);

// Route to find a movie by its ID
// router.get('/movies/:movieId', movieController.findOne);

// Route to find movies with advanced filtering
router.get('/filter', movieController.filterMovies);


module.exports = router;
