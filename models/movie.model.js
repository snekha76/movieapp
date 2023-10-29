const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieid: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
  },
  released: {
    type: Boolean,
    required: true,
  },
  poster_url: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  publish_date: {
    type: Date,
    required: true,
  },
  artists: [
    {
      artistid: Number,
      first_name: String,
      last_name: String,
      wiki_url: String,
      profile_url: String,
    },
  ],
  genres: [String],
  duration: Number,
  critic_rating: Number,
  trailer_url: String,
  wiki_url: String,
  story_line: String,
  shows: [
    {
      id: Number,
      theatre: {
        name: String,
        city: String,
      },
      language: String,
      show_timing: Date,
      available_seats: Number,
      unit_price: Number,
    },
  ],
});

module.exports = mongoose.model('movie', movieSchema);
