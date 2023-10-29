const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  genreName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // You can add more fields as per your client's requirements
});

module.exports = mongoose.model('genre', genreSchema);