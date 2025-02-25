/**
 * NOTE: This data is not strictly necessary for the assignment, 
 * but was generated by ChatGPT and included because it will **likely** be helpful.
 * Feel free to modify, ignore or expand it as needed.
 */

const Genres = {
    ACTION: "Action",
    ADVENTURE: "Adventure",
    RPG: "Role-Playing Game",
    FPS: "First-Person Shooter",
    STRATEGY: "Strategy",
    SPORTS: "Sports",
    HORROR: "Horror",
    SIMULATION: "Simulation",
    PUZZLE: "Puzzle",
    RACING: "Racing"
};

const VideoGames = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        year: 2017,
        rating: 9.8,
        numberOfReviews: 950,
        description: "An open-world adventure set in Hyrule.",
        img: "/images/LegendOfZeldaBOTW.jpg"
    },
    {
        id: 2,
        title: "The Witcher 3: Wild Hunt",
        year: 2015,
        rating: 9.7,
        numberOfReviews: 15000,
        description: "A sprawling RPG filled with monsters, magic, and rich storytelling.",
        img: "/images/Witcher3WildHunt.avif"
    },
    {
        id: 3,
        title: "Half-Life 2",
        year: 2004,
        rating: 9.6,
        numberOfReviews: 10000,
        description: "A groundbreaking first-person shooter with physics-based gameplay.",
        img: "/images/HalfLife2.jpg"
    },
    {
        id: 4,
        title: "Dark Souls III",
        year: 2016,
        rating: 9.4,
        numberOfReviews: 8500,
        description: "A brutally challenging RPG with rich lore and deep combat.",
        img: "/images/DarkSouls3.jpg"
    },
    {
        id: 5,
        title: "Minecraft",
        year: 2011,
        rating: 9.5,
        numberOfReviews: 20000,
        description: "A sandbox game where you can build and explore infinite worlds.",
        img: "/images/Minecraft.jpg"
    },
    {
        id: 6,
        title: "Celeste",
        year: 2018,
        rating: 9.5,
        numberOfReviews: 800,
        description: "A heartfelt platformer about climbing a mountain while overcoming personal struggles.",
        img: "/images/Celeste.png"
    },
    {
        id: 7,
        title: "Hollow Knight",
        year: 2017,
        rating: 9.5,
        numberOfReviews: 7500,
        description: "A hand-drawn Metroidvania with deep exploration and tight combat.",
        img: "/images/HollowKnight.jpg"
    },
    {
        id: 8,
        title: "Katana ZERO",
        year: 2019,
        rating: 9.0,
        numberOfReviews: 600,
        description: "A stylish neo-noir action-platformer with fast-paced combat.",
        img: "/images/KatanaZero.jpg"
    },
    {
        id: 9,
        title: "Outer Wilds",
        year: 2019,
        rating: 9.3,
        numberOfReviews: 900,
        description: "A mystery exploration game set in a solar system trapped in a time loop.",
        img: "/images/OuterWilds.webp"
    },
    {
        id: 10,
        title: "Disco Elysium",
        year: 2019,
        rating: 9.6,
        numberOfReviews: 950,
        description: "A narrative-driven RPG where you play as a detective with unique skill-based dialogue.",
        img: "/images/DiscoElysium.jpg"
    }
    // ... other games
];

module.exports = { VideoGames };
