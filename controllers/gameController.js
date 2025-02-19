// controllers/gameController.js

// Import game data (assuming data.js in utils holds the game data)
const { games } = require('../utils/data');

// Get games by genre
exports.getGamesByGenre = (req, res) => {
    const genre = req.params.genre.toLowerCase();
    const filteredGames = games.filter(game => 
        game.genre.toLowerCase() === genre
    );
    res.json(filteredGames);
};

// Get top-rated games
exports.getTopRatedGames = (req, res) => {
    const topRatedGames = games
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 15);
    res.json(topRatedGames);
};

// Get game details by ID
exports.getGameDetails = (req, res) => {
    const gameId = req.params.id;
    const game = games.find(g => g.id === gameId);

    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    res.json(game);
};

// Get a random game
exports.getRandomGame = (req, res) => {
    const randomIndex = Math.floor(Math.random() * games.length);
    res.json(games[randomIndex]);
};

// Get hidden gems
exports.getHiddenGems = (req, res) => {
    const hiddenGems = games.filter(game => 
        game.rating > 8 && game.reviews < 50
    );
    res.json(hiddenGems);
};
