const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
let UserSchema = new Schema({
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
    },
});
 

module.exports = mongoose.model('users', UserSchema);
