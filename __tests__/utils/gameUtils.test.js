
const { 
    getGamesByGenre, 
    getTopRatedGames, 
    getGameDetailsById, 
    selectRandomGameId, 
    getHiddenGems 
} = require("../../utils/gameUtils");

const { VideoGames } = require("../../utils/data");

describe('Game Utility Functions', () => {

    // Test for getGamesByGenre
    describe('getGamesByGenre', () => {
        test('should return games of the specified genre', () => {
            const genre = 'Action';
            const result = getGamesByGenre(genre);
            
            // Check if all games returned are of the specified genre
            result.forEach(game => {
                expect(game.genre).toBe(genre);
            });
        });

        test('should return an empty array for a non-existing genre', () => {
            const genre = 'NonExistingGenre';
            const result = getGamesByGenre(genre);
            expect(result).toEqual([]);
        });
    });

    // Test for getTopRatedGames
    describe('getTopRatedGames', () => {
        test('should return top-rated games sorted by rating', () => {
            const result = getTopRatedGames();
            
            // Check if the games are sorted in descending order by rating
            for (let i = 0; i < result.length - 1; i++) {
                expect(result[i].rating).toBeGreaterThanOrEqual(result[i + 1].rating);
            }
        });

        test('should return the correct number of top-rated games', () => {
            const result = getTopRatedGames();
            expect(result.length).toBeLessThanOrEqual(15);
        });
    });

    // Test for getGameDetailsById
    describe('getGameDetailsById', () => {
        test('should return game details for a valid ID', () => {
            const validId = '1';  // Change this to a valid ID from your data
            const result = getGameDetailsById(validId);
            expect(result).toBeDefined();
            expect(result.id).toBe(validId);
        });

        test('should return undefined for an invalid ID', () => {
            const invalidId = '9999';
            const result = getGameDetailsById(invalidId);
            expect(result).toBeUndefined();
        });
    });

    // Test for selectRandomGameId
    describe('selectRandomGameId', () => {
        test('should return a valid game ID', () => {
            const randomId = selectRandomGameId();
            const gameExists = VideoGames.some(game => game.id === randomId);
            expect(gameExists).toBe(true);
        });
    });

    // Test for getHiddenGems
    describe('getHiddenGems', () => {
        test('should return hidden gems with high rating and few reviews', () => {
            const result = getHiddenGems();
            
            // Check if all games returned have high rating and few reviews
            result.forEach(game => {
                expect(game.rating).toBeGreaterThan(8);
                expect(game.reviews).toBeLessThan(50);
            });
        });
    });
});
