const Movie = require('../models/movie.model'); // Replace with your Movie model import

// Find all movies based on status
exports.findAllMovies = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const movies = await Movie.find(query);

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Find a movie by its ID
exports.findOne = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Find shows for a specific movie by its ID
exports.findShows = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    const shows = movie.shows || [];

    if (shows.length === 0) {
      return res.status(404).json({ message: 'No shows found for this movie' });
    }

    res.status(200).json(shows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};






// ////////////////////////
// const Movie = require('../models/movie.model'); // Replace with your Movie model import

// Find all movies
// exports.findAllMovies = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.status(200).json(movies);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// Find movies by status (PUBLISHED or RELEASED)
exports.findMoviesByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const query = { status };
    const movies = await Movie.find(query);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Find a movie by its ID
// exports.findOne = async (req, res) => {
//   try {
//     const { movieId } = req.params;
//     const movie = await Movie.findById(movieId);
//     if (!movie) {
//       return res.status(404).json({ message: 'Movie not found' });
//     }
//     res.status(200).json(movie);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// Find movies with advanced filtering
exports.filterMovies = async (req, res) => {
  try {
    const { status, title, genres, artists, start_date, end_date } = req.query;
    const query = {};
    
    if (status) query.status = status;
    if (title) query.title = title;
    if (genres) query.genres = genres;
    if (artists) query.artists = artists;
    if (start_date) query.release_date = { $gte: start_date };
    if (end_date) query.release_date = { ...query.release_date, $lte: end_date };

    const movies = await Movie.find(query);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


