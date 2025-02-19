// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const { validateGameId } = require('../middleware/validateInputs');

// Route to get games by genre
router.get('/genre/:genre', gameController.getGamesByGenre);

// Route to get top-rated games
router.get('/top-rated', gameController.getTopRatedGames);

// Route to get game details by ID (with validation)
router.get('/:id', validateGameId, gameController.getGameDetails);

// Route to get a random game
router.get('/random', gameController.getRandomGame);

// Route to get hidden gems
router.get('/hidden-gems', gameController.getHiddenGems);

module.exports = router;
