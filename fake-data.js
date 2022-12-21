const fakery = require('mongoose-fakery');
const user = require('./models/user/userModel');

fakery.fake('user', user, {
    name: 'john',
    surname: 'doe'
});

let userFakery = fakery.fake('user');
console.log(userFakery);

//Para correrlo node fake-data.js