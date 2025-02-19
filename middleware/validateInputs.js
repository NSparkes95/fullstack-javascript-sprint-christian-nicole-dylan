// middleware/validateInputs.js

// Middleware to validate game ID as a number
const validateGameId = (req, res, next) => {
    const gameId = req.params.id;
    
    // Check if the game ID is a number
    if (!/^\d+$/.test(gameId)) {
        return res.status(400).json({ message: 'Invalid Game ID. It must be a number.' });
    }

    // If valid, proceed to the next middleware or route handler
    next();
};

module.exports = {
    validateGameId
};
