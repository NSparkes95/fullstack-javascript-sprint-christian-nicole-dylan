// utils/gameUtils.js

// ✅ Import VideoGames from data.js
const { VideoGames } = require("./data");

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

    // ✅ Check if VideoGames is an array and is defined
    if (!VideoGames || !Array.isArray(VideoGames)) {
        console.error("❌ Error: VideoGames is not an array or is undefined!");
        return [];
    }

    // ✅ Shuffle the games array to get a random selection
    const shuffledGames = shuffleArray([...VideoGames]);
    console.log("🎲 Shuffled Games:", shuffledGames); // 🎲 Log shuffled games to check output

    // ✅ Filter and map hidden gems
    const hiddenGems = shuffledGames
        .filter(game => game.averageRating >= 9.0 && game.numberOfReviews < 1000) 
        .map(game => ({
            id: game.id || Math.random(),  // 🆔 Generate a random ID if missing
            title: game.title,
            year: game.releaseYear,
            rating: game.averageRating, 
            reviews: game.numberOfReviews,
            description: game.description, 
            img: game.img
        }));
    console.log("📜 Hidden Gems Found:", hiddenGems.length > 0 ? hiddenGems : "None found! Check filter conditions."); // ✅ Log results to check output

    return hiddenGems;
}

// ✅ Export all functions
module.exports = {
    getGamesByGenre,
    getTopRatedGames,
    getGameDetailsById,
    selectRandomGames,   // ✅ Exported to fix the missing function error
    getHiddenGems,
};
