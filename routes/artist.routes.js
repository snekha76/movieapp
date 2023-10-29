const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Route to find all artists
router.get('/', artistController.findAllArtists);

// Route to get artist by artistid
router.get('/:artistid', artistController.getAtrist);

// _id
module.exports = router;
