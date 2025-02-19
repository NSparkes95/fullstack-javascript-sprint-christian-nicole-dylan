// index.js

const express = require('express');
const path = require('path');
const gameRoutes = require('./routes/gameRoutes'); // Import game routes

const app = express();

// Set view engine and public directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Home Route - Display index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Game Details Route - Display game details for a given ID
app.get('/game/:id', (req, res) => {
    const gameId = req.params.id;
    res.render('index', { gameId }); // Pass gameId to the template
});

// Use the modular routes for all game-related endpoints
app.use('/games', gameRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
