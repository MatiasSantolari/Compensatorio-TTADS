const mockingoose = require('mockingoose');
const BooksModel = require('./bookModel');
const {
    fetchBooks,
    fetchBook,
    createBook,
} = require('./bookController');

describe('Books service', () => {
    describe('fetchBooks', () => {
        it ('should return the list of books', async () => {
            mockingoose(BooksModel).toReturn([
                {
                    title: 'book 1',
                    author: {
                        firstname: 'John',
                        lastname: 'Doe'
                    },
                    year: 2021,
                },
                {
                    title: 'book 2',
                    author: {
                        firstname: 'Jane',
                        lastname: 'Doe'
                    },
                    year: 2022,
                }
            ], 'find');
            const results = await fetchBooks();
            expect(results[0].title).toBe('book 1');
        });
    });
});
