// ─── Importing Dependencies ─────────────────────────────────────────────────────
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// ─── Importing Modular Routes and Error Handler ──────────────────────────────────
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middleware/errorHandler');

// ─── Importing Games and Helper Functions ────────────────────────────────────────
const { VideoGames, Genres } = require("./utils/data");
const { 
    getGamesByGenre, 
    getTopRatedGames, 
    getGameDetailsById, 
    selectRandomGames,  
    getHiddenGems 
} = require("./utils/gameUtils");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

// ✅ Landing Page Route
app.get('/', (req, res) => {
    const randomGames = selectRandomGames(9);  // ✅ Get 9 random games
    res.render('index', { games: randomGames });
});

// ✅ Home Page Route
app.get('/home', (req, res) => {
    const randomGames = selectRandomGames(9);  // ✅ Get 9 random games
    res.render('home', { games: randomGames });
});

// ✅ Top Rated Route
app.get('/top-rated', (req, res) => {
    const topRatedGames = getTopRatedGames(15); // Get top 15 games
    res.render('top-rated', { games: topRatedGames });
});

// ✅ Game Details Route - Display game details for a given ID
app.get('/game-details/:id', (req, res) => {
    const gameId = parseInt(req.params.id);
    const game = getGameDetailsById(gameId); // Fetch game details

    if (!game) {
        return res.status(404).send('Game not found');
    }

    res.render('game-details', { game });
});

// ✅ Hidden Gems Route
app.get('/hidden-gems', (req, res) => {
    const hiddenGems = getHiddenGems(); // Get hidden gems
    res.render('hidden-gems', { games: hiddenGems });
});

// ✅ Random Game Route
app.get('/random-game', (req, res) => {
    const randomGame = selectRandomGames(1)[0];  // ✅ Get 1 random game
    res.render('random-game', { game: randomGame });
});

// ✅ Search Route - Unified and Fixed
app.get('/search', (req, res) => {
    const query = req.query.query ? req.query.query.toLowerCase() : ''; // Get search query
    let searchResults = [];

    if (query) {
        searchResults = VideoGames.filter(game => 
            game.title.toLowerCase().includes(query) ||  // Match title
            game.description.toLowerCase().includes(query) // Match description
        );
    }

    res.render('search-results', { games: searchResults, query });
});

// ✅ Genre Filtering Route
app.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const gamesByGenre = getGamesByGenre(genre, 9); // Get 9 games by genre
    res.render('genre', { games: gamesByGenre, genre });
});

// ✅ Upcoming Games Route
app.get('/upcoming', (req, res) => {
    const upcomingGames = [
        {
            id: 101,
            title: "The Legend of Zelda: Tears of the Kingdom",
            releaseDate: "2025",
            description: "The next epic adventure in the world of Hyrule.",
            img: "/images/LegendOfZeldaTOTK.jpg"
        },
        {
            id: 102,
            title: "Final Fantasy XVI",
            releaseDate: "2025",
            description: "A new tale of fantasy and destiny awaits.",
            img: "/images/FinalFantasyXVI.jpg"
        },
        {
            id: 103,
            title: "Starfield",
            releaseDate: "2025",
            description: "Explore the cosmos in Bethesda's space-faring RPG.",
            img: "/images/Starfield.jpg"
        }
    ];

    res.render('upcoming', { upcomingGames });
});

// ✅ Use the modular routes for all game-related endpoints
app.use('/games', gameRoutes);

// ✅ Use centralized error handler
app.use(errorHandler);

// ✅ Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
