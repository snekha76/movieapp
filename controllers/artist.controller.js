const { Router } = require('express');
const Artist = require('../models/artist.model'); // Replace with your Artist model import

// Find all artists
exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();

    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getAtrist = async (req, res) => {
  try {
    const { artistid } = req.params;
    const artis = await Artist.findById(artistid);

    if (!artis) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    res.status(200).json(artis);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


