const mongoose = require('mongoose');
const fakery = require('mongoose-fakery');
const client = require('../models/client/clientModel');

fakery.fake('client', mongoose.model('clients'), {
    name: fakery.g.name(),
    surname: fakery.g.surname(),
    email: fakery.lazy(function(attrs){
        // this will return name@example.com
        return attrs.name + '@example.com';
    })

});

let userFakery = fakery.fake('client');
console.log(userFakery);

//Para correrlo node fake-data.js