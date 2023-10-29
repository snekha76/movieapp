const mongoose = require('mongoose');

const Artist = require('./artist.model');
const Genre = require('./genre.model');
const Movie = require('./movie.model');
const User = require('./user.model');
const user = require('./user')

module.exports = {
  Artist,
  Genre,
  Movie,
  User,
  user
};