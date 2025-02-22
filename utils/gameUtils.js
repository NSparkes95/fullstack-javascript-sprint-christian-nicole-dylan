const { VideoGames, Genres } = require("./data");

const games = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        year: 2017,
        rating: 9.8,
        description: "An open-world adventure set in Hyrule.",
        img: "https://upload.wikimedia.org/wikipedia/en/0/02/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
        id: 2,
        title: "Red Dead Redemption 2",
        year: 2018,
        rating: 9.7,
        description: "An epic Western action-adventure game.",
        img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
    {
        id: 3,
        title: "The Witcher 3: Wild Hunt",
        year: 2015,
        rating: 9.6,
        description: "A story-driven RPG set in a stunning open world.",
        img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
    },
    {
        id: 4,
        title: "Dark Souls 3",
        year: 2016,
        rating: 9.5,
        description: "A challenging action RPG set in a dark fantasy world.",
        img: "https://upload.wikimedia.org/wikipedia/en/1/16/Dark_Souls_III_cover_art.jpg"
    },
    {
        id: 5,
        title: "God of War",
        year: 2018,
        rating: 9.4,
        description: "A mythological action-adventure following Kratos.",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },
    {
        id: 6,
        title: "Persona 5 Royal",
        year: 2020,
        rating: 9.3,
        description: "A stylish RPG about high school Phantom Thieves.",
        img: "https://upload.wikimedia.org/wikipedia/en/6/66/Persona_5_cover_art.jpg"
    },
    {
        id: 7,
        title: "Elden Ring",
        year: 2022,
        rating: 9.2,
        description: "A vast open-world RPG from the makers of Dark Souls.",
        img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Elden_Ring_Box_art.jpg"
    },
    {
        id: 8,
        title: "Bloodborne",
        year: 2015,
        rating: 9.1,
        description: "A gothic horror-inspired action RPG.",
        img: "https://upload.wikimedia.org/wikipedia/en/d/d5/Bloodborne_Cover_Wallpaper.png"
    },
    {
        id: 9,
        title: "Super Mario Odyssey",
        year: 2017,
        rating: 9.0,
        description: "A creative and fun-filled 3D platformer.",
        img: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg"
    },
    {
        id: 10,
        title: "Hollow Knight",
        year: 2017,
        rating: 8.9,
        description: "A beautiful and challenging metroidvania.",
        img: "https://upload.wikimedia.org/wikipedia/en/1/11/Hollow_Knight_first_cover_art.jpg"
    },
    {
        id: 11,
        title: "Sekiro: Shadows Die Twice",
        year: 2019,
        rating: 8.8,
        description: "A stealth-action samurai adventure.",
        img: "https://upload.wikimedia.org/wikipedia/en/4/49/Sekiro_art.jpg"
    },
    {
        id: 12,
        title: "Celeste",
        year: 2018,
        rating: 8.7,
        description: "A heartfelt platformer about overcoming struggles.",
        img: "https://upload.wikimedia.org/wikipedia/en/6/69/Celeste_box_art_final.png"
    },
    {
        id: 13,
        title: "Metroid Dread",
        year: 2021,
        rating: 8.6,
        description: "A thrilling return to classic 2D Metroid.",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Metroid_Dread.jpg"
    },
    {
        id: 14,
        title: "Resident Evil 4 (Remake)",
        year: 2023,
        rating: 8.5,
        description: "A modern reimagining of the classic survival horror.",
        img: "https://upload.wikimedia.org/wikipedia/en/7/74/Resident_Evil_4_remake_cover_art.jpg"
    },
    {
        id: 15,
        title: "Cyberpunk 2077 (Phantom Liberty)",
        year: 2023,
        rating: 8.4,
        description: "A deep RPG set in a cyberpunk dystopia.",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        id: 16,
        title: "Monster Hunter: World",
        year: 2018,
        rating: 8.3,
        description: "An action-packed RPG where you hunt massive monsters.",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"
    }
];

/**
 * Get `x` games by genre
 * @param {string} genre - The genre of the games
 * @param {number} x - The number of games to retrieve
 * @returns {*} - An array of games matching the genre
 */
function getGamesByGenre(genre, x) {
    // Implementation here
}

/**
 * Get the `x` top-rated games, ordered by rating
 * @param {number} x - The number of top-rated games to retrieve
 * @returns {*} - An array of top-rated games
 */
function getTopRatedGames(x) {
    return games.sort((a, b) => b.rating - a.rating).slice(0, x);
}

/**
 * Get the details of a game by its ID
 * @param {number} id - The ID of the game
 * @returns {*} - The game object
 */
function getGameDetailsById(id) {
    return games.find(g => g.id === id) || null;
}

/**
 * Select a random game ID
 * @returns {number} 
 */
function selectRandomGameId() {
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex].id;
}

/**
 * Get "Hidden Gems" - games that are highly rated but not widely reviewed
 * @returns {Array} - An array of hidden gem games
 */
function getHiddenGems() {
    return games.filter(game => game.rating >= 8.5 && game.rating <= 9.0);
}

// Export the functions to be used in other modules
module.exports = {
    getGamesByGenre,
    getTopRatedGames,
    getGameDetailsById,
    selectRandomGameId,
    getHiddenGems,
};
