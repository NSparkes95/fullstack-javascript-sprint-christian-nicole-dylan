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
    RACING: "Racing",
    PLATFORMER: "Platformer",
    METROIDVANIA: "Metroidvania",
    INDIE: "Indie"
};

const VideoGames = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        year: 2017,
        rating: 9.8,
        numberOfReviews: 950,
        description: "An open-world adventure set in Hyrule.",
        developer: "Nintendo",
        genre: Genres.ADVENTURE,
        img: "/images/LegendOfZeldaBOTW.jpg"
    },
    {
        id: 2,
        title: "The Witcher 3: Wild Hunt",
        year: 2015,
        rating: 9.7,
        numberOfReviews: 15000,
        description: "A sprawling RPG filled with monsters, magic, and rich storytelling.",
        developer: "CD Projekt Red",
        genre: Genres.RPG,
        img: "/images/Witcher3WildHunt.avif"
    },
    {
        id: 3,
        title: "Half-Life 2",
        year: 2004,
        rating: 9.6,
        numberOfReviews: 10000,
        description: "A groundbreaking first-person shooter with physics-based gameplay.",
        developer: "Valve",
        genre: Genres.FPS,
        img: "/images/HalfLife2.jpg"
    },
    {
        id: 4,
        title: "Dark Souls III",
        year: 2016,
        rating: 9.4,
        numberOfReviews: 8500,
        description: "A brutally challenging RPG with rich lore and deep combat.",
        developer: "FromSoftware",
        genre: Genres.ACTION,
        img: "/images/DarkSouls3.jpg"
    },
    {
        id: 5,
        title: "Minecraft",
        year: 2011,
        rating: 9.5,
        numberOfReviews: 20000,
        description: "A sandbox game where you can build and explore infinite worlds.",
        developer: "Mojang Studios",
        genre: Genres.SIMULATION,
        img: "/images/Minecraft.jpg"
    },
    {
        id: 6,
        title: "Celeste",
        year: 2018,
        rating: 9.5,
        numberOfReviews: 800,
        description: "A heartfelt platformer about climbing a mountain while overcoming personal struggles.",
        developer: "Maddy Makes Games",
        genre: Genres.PLATFORMER,
        img: "/images/Celeste.png"
    },
    {
        id: 7,
        title: "Hollow Knight",
        year: 2017,
        rating: 9.5,
        numberOfReviews: 7500,
        description: "A hand-drawn Metroidvania with deep exploration and tight combat.",
        developer: "Team Cherry",
        genre: Genres.METROIDVANIA,
        img: "/images/HollowKnight.jpg"
    },
    {
        id: 8,
        title: "Katana ZERO",
        year: 2019,
        rating: 9.0,
        numberOfReviews: 600,
        description: "A stylish neo-noir action-platformer with fast-paced combat.",
        developer: "Askiisoft",
        genre: Genres.INDIE,
        img: "/images/KatanaZero.jpg"
    },
    {
        id: 9,
        title: "Outer Wilds",
        year: 2019,
        rating: 9.3,
        numberOfReviews: 900,
        description: "A mystery exploration game set in a solar system trapped in a time loop.",
        developer: "Mobius Digital",
        genre: Genres.ADVENTURE,
        img: "/images/OuterWilds.webp"
    },
    {
        id: 10,
        title: "Disco Elysium",
        year: 2019,
        rating: 9.6,
        numberOfReviews: 950,
        description: "A narrative-driven RPG where you play as a detective with unique skill-based dialogue.",
        developer: "ZA/UM",
        genre: Genres.RPG,
        img: "/images/DiscoElysium.jpg"
    },
    {
        id: 11,
        title: "God of War",
        year: 2018,
        rating: 9.8,
        numberOfReviews: 12000,
        description: "A father-son journey set in Norse mythology with intense combat and emotional storytelling.",
        img: "/images/GodOfWar.jpg"
    },
    {
        id: 12,
        title: "Red Dead Redemption 2",
        year: 2018,
        rating: 9.7,
        numberOfReviews: 14000,
        description: "An epic Western adventure with stunning open-world exploration and a gripping narrative.",
        img: "/images/RedDeadRedemption2.jpg"
    },
    {
        id: 13,
        title: "Persona 5 Royal",
        year: 2020,
        rating: 9.6,
        numberOfReviews: 8500,
        description: "A stylish JRPG with a deep story, complex characters, and a unique turn-based battle system.",
        img: "/images/Persona5Royal.jpg"
    },
    {
        id: 14,
        title: "The Last of Us Part II",
        year: 2020,
        rating: 9.5,
        numberOfReviews: 11000,
        description: "A narrative-driven survival game that explores themes of revenge, loss, and hope.",
        img: "/images/TheLastOfUsPart2.jpg"
    },
    {
        id: 15,
        title: "Hades",
        year: 2020,
        rating: 9.4,
        numberOfReviews: 7000,
        description: "A roguelike dungeon crawler with fast-paced combat, an engaging story, and beautiful artwork.",
        img: "/images/Hades.jpg"
    }
    
];

module.exports = { VideoGames, Genres };
