const mongoose = require('mongoose');
const fakery = require('mongoose-fakery');
const uuser = require('../models/user/userModel');

fakery.fake('user', mongoose.model('User'), {
    name: fakery.g.name(),
    surname: fakery.g.surname(),
    email: fakery.lazy(function(attrs){
        // this will return name@example.com
        return attrs.name + '@example.com';
    })

});

let userFakery = fakery.fake('user');
console.log(userFakery);

//Para correrlo node fake-data.js