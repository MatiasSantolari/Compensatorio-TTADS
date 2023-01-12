const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
let ClientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});
 

module.exports = mongoose.model('clients', ClientSchema);