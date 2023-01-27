const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'authors'
    },
    year: {
        type: String,
    }
});

module.exports = mongoose.model('booksModel', BooksSchema);
