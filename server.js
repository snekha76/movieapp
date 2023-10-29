const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dbConfig = require('./config/db.config');

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.error('Cannot connect to the database:', err);
  });

app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});


// Import route files
const movieRoutes = require('./routes/movie.routes')
const genreRoutes = require('./routes/genre.routes');
const artistRoutes = require('./routes/artist.routes');
const userRoutes = require('./routes/user.routes');


// Mount the routes
app.use('/api/movies', movieRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/auth', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
