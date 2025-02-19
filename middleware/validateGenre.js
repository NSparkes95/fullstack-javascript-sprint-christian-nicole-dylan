// middleware/validateGenre.js

// Import available genres
const { Genres } = require('../utils/data');

// Middleware to validate the genre parameter
const validateGenre = (req, res, next) => {
    const genre = req.params.genre.toLowerCase();

    // Check if the genre exists in the list of available genres
    if (!Genres.map(g => g.toLowerCase()).includes(genre)) {
        return res.status(400).json({ message: 'Invalid Genre. Please provide a valid genre.' });
    }

    // If valid, proceed to the next middleware or route handler
    next();
};

module.exports = validateGenre;
