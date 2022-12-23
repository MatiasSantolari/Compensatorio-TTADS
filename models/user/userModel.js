const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
let UserSchema = new Schema({
    sex: {
        type: String,
        require: true
    },
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
    birthday: {
        type: String,
        require: true
    },
    avatar : {
        type: String,
        require: true
    }
});
 

module.exports = mongoose.model('users', UserSchema);
