const Books = require('./bookModel');

const fetchBooks = () => Books
    .find({})
    .populate('author')
    .exec();

const fetchBook = id => Books
    .findById(id)
    .populate('author')
    .exec();

const createBook = ({title, author, year}) => {
    const book = new Books({
        title,
        author,
        year,
    });
    return book.save();
}

module.exports = {
    fetchBooks,
    fetchBook,
    createBook,
};

