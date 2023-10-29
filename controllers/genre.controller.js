const Genre = require('../models/genre.model'); // Replace with your Genre model import

// Find all genres
exports.findAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getGenreByGenre = async (req, res) => {
  try {
    const { genreName } = req.params;
    const genre = await Genre.findOne({ genre: genreName });

    if (!genre) {
      return res.status(404).json({ message: 'Genre not found' });
    }

    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


