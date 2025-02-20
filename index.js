// index.js

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middleware/errorHandler');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('home'); // Make sure home.ejs exists in /views
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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
