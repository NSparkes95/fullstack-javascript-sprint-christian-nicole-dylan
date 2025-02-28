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

    // ✅ Get Genre-based Recommendations (excluding current game)
    const recommendations = VideoGames
        .filter(g => g.genre === game.genre && g.id !== game.id)
        .slice(0, 3);  // ✅ Limit to 3 recommendations

    res.render('game-details', { game, recommendations });
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
            id: 204,
            title: "The Legend of Zelda: Tears of the Kingdom",
            releaseDate: 2025,
            rating: "TBA",
            numberOfReviews: 0,
            description: "The next epic adventure in the world of Hyrule, featuring new abilities, expansive exploration, and an epic narrative.",
            developer: "Nintendo",
            genre: Genres.ADVENTURE,
            img: "/images/LegendOfZeldaTOTK.jpg"
        },
        {
            id: 205,
            title: "Final Fantasy XVI",
            releaseDate: 2025,
            rating: "TBA",
            numberOfReviews: 0,
            description: "An epic fantasy tale of destiny and power, set in a world of magic, crystals, and intense battles.",
            developer: "Square Enix",
            genre: Genres.RPG,
            img: "/images/FinalFantasyXVI.jpg"
        },
        {
            id: 206,
            title: "Starfield",
            releaseDate: 2025,
            rating: "TBA",
            numberOfReviews: 0,
            description: "Explore the vast cosmos in Bethesda's space-faring RPG, featuring exploration, adventure, and deep storytelling.",
            developer: "Bethesda Game Studios",
            genre: Genres.RPG,
            img: "/images/Starfield.jpg"
        },
        {
            id: 207,
            title: "Elden Ring: Shadow of the Erdtree",
            releaseDate: 2025,
            rating: "TBA",
            numberOfReviews: 0,
            description: "An epic expansion to the Elden Ring universe, with new lands to explore, challenging bosses, and rich lore.",
            developer: "FromSoftware",
            genre: Genres.ACTION,
            img: "/images/EldenRingShadow.jpg"
        },
        {
            id: 208,
            title: "Hollow Knight: Silksong",
            releaseDate: 2025,
            rating: "TBA",
            numberOfReviews: 0,
            description: "The highly anticipated sequel to Hollow Knight, featuring new abilities, vast environments, and intense combat.",
            developer: "Team Cherry",
            genre: Genres.ACTION,
            img: "/images/HollowKnightSilksong.jpg"
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
