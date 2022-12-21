const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
let UserSchema = new Schema({
    name: String,
    surname: String,
    email: String
});
 
mongoose.model('User', UserSchema);
