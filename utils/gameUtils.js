// utils/gameUtils.js

// ✅ Import VideoGames from data.js
const { VideoGames } = require("./data");

/**
 * Debugging - Ensure VideoGames is imported
 */
console.log("🎮 VideoGames Imported:", Array.isArray(VideoGames) ? VideoGames.length + " games loaded." : "Error: VideoGames not loaded!");

/**
 * Get `x` games by genre
 * @param {string} genre - The genre of the games
 * @param {number} x - The number of games to retrieve
 * @returns {Array} - An array of games matching the genre
 */
function getGamesByGenre(genre, x) {
    // ✅ Filter games by genre (case insensitive)
    return VideoGames
        .filter(game => 
            game.genre && game.genre.toLowerCase().includes(genre.toLowerCase())
        )
        .slice(0, x);
}

/**
 * Get the `x` top-rated games, ordered by rating
 * @param {number} x - The number of top-rated games to retrieve
 * @returns {Array} - An array of top-rated games
 */
function getTopRatedGames(x) {
    // ✅ Sort games by rating in descending order and get top `x`
    return VideoGames
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, x);
}

/**
 * Get the details of a game by its ID
 * @param {number} id - The ID of the game
 * @returns {Object|null} - The game object or null if not found
 */
function getGameDetailsById(id) {
    // ✅ Find the game by ID
    return VideoGames.find(game => game.id === id) || null;
}

/**
 * Select `x` random games
 * @param {number} x - Number of random games to select
 * @returns {Array} - An array of randomly selected games
 */
const selectRandomGames = (count) => {
    if (!VideoGames || VideoGames.length === 0) return [];
    
    // ✅ Fisher-Yates shuffle for randomness
    const shuffled = [...VideoGames].sort(() => 0.5 - Math.random());  
    return shuffled.slice(0, count);  // ✅ Pick first `count` random games
};

/**
 * Shuffle an array (Helper Function)
 * @param {Array} array - The array to shuffle
 * @returns {Array} - The shuffled array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Get "Hidden Gems" - games that are highly rated but not widely reviewed
 * @returns {Array} - An array of hidden gem games
 */
function getHiddenGems() {
    console.log("🔍 Checking Hidden Gems...");

    // Ensure VideoGames is defined and is an array
    if (!Array.isArray(VideoGames) || VideoGames.length === 0) {
        console.error("❌ Error: VideoGames is empty or not an array!");
        return [];
    }    

    // Shuffle the games array to get a random selection
    const shuffledGames = shuffleArray([...VideoGames]);
    console.log("🎲 Shuffled Games:", shuffledGames);

    // Filter and map hidden gems
    const hiddenGems = shuffledGames
        .filter(game => game.averageRating >= 7.0 && game.numberOfReviews < 5000) // Loosened conditions
        .map(game => ({
            id: game.id || Math.random().toString(36).substr(2, 9), // Unique ID if missing
            title: game.title || "Unknown Title",
            year: game.year || "Unknown Year",
            rating: game.rating || "N/A",
            reviews: game.numberOfReviews || 0,
            description: game.description || "No description available.",
            img: game.img ? game.img : '/images/fallback.jpg' // Ensure fallback image
        }));        

    console.log("📜 Hidden Gems Found:", hiddenGems.length > 0 ? hiddenGems.length : "None found! 😢");

    return hiddenGems;
}


// ✅ Export all functions
module.exports = {
    getGamesByGenre,
    getTopRatedGames,
    getGameDetailsById,
    selectRandomGames,   // ✅ Exported to fix the missing function error
    getHiddenGems
};
