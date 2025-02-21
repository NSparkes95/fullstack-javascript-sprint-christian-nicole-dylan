// index.js

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middleware/errorHandler');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Top Rated Route
app.get('/top-rated', (req, res) => {
    res.render('top-rated');
});

// Game Details Route
app.get('/game-details', (req, res) => {
    res.render('game-details');
});

// Hidden Gems Route
app.get('/hidden-gems', (req, res) => {
    res.render('hidden-gems');
});

// Random Game Route
app.get('/random-game', (req, res) => {
    res.render('random-game');
});

// Game Details Route - Display game details for a given ID
app.get('/game/:id', (req, res) => {
    const gameId = req.params.id;
    res.render('index', { gameId }); // Pass gameId to the template
});

// Use the modular routes for all game-related endpoints
app.use('/games', gameRoutes);

// Use centralized error handler
app.use(errorHandler);

// Start server

const PORT = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
