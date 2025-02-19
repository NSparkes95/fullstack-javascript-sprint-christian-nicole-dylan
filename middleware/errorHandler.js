// middleware/errorHandler.js

// Centralized Error Handler
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        message: 'Internal Server Error. Something went wrong.',
        error: err.message
    });
};

module.exports = errorHandler;
