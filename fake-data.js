const fakery = require('mongoose-fakery');
const user = require('./models/user/userModel');

fakery.fake('user', user, {
    name: fakery.g.name(),
    surname: fakery.g.surname(),
    email: fakery.lazy(function(attrs){
        // this will return john@example.com
        return attrs.name + '@example.com';
    })

});

let userFakery = fakery.fake('user');
console.log(userFakery);
console.log(userFakery.email)

//Para correrlo node fake-data.js