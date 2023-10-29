const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre.controller');

// Route to find all genres
router.get('/', genreController.findAllGenres);

// Route to get genre by genrename
router.get('/:genreName', genreController.getGenreByGenre);





module.exports = router;
