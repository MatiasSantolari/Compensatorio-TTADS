const mongoose = require('mongoose')
const crypto = require('crypto')
const Schema = mongoose.Schema;
 
let UserSchema = new Schema({
    sex: {
        type: String,
        require: true
    },
    hash: String,
    salt: String,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    birthday: {
        type: String,
        required: true
    },
    avatar : {
        type: String,
        required: true
    },
    phone:{
        type:String
    }
});

const keyLength = 512;
const iterations = 10000;
const digest = "sha512";
const encoding = "hex";

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, iterations, keyLength, digest)
        .toString(encoding);
};

UserSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, iterations, keyLength, digest)
        .toString(encoding);
    return this.hash === hash;
};


module.exports = mongoose.model('users', UserSchema);
