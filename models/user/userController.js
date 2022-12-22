const express = require('express');
const userModel = require('./userModel');
const router = express.Router();
const { Response } = require('../../response');
const createError = require('http-errors');

const { faker } = require('@faker-js/faker');


//getAll
router.get('/', async(req, res) => {
    try {
        let users = await userModel.find();
        Response.success(res, 200, 'Listado de usuarios', users);
    } catch (error) {
        Response.error(res);
    }
})

//create
router.post('/', async(req, res) => {
    try {
        for (let i = 0; i < 10; i++){
            const name = faker.name.fullName(); 
            const surname = faker.name.lastName();
            const email = faker.internet.email(name,surname);
            const userJSON = '{"name" : "'+ name + '", "surname" : "'+ surname +'", "email" : "'+ email +'"}';
            console.log(userJSON);
            await userModel.create(userJSON);
        };
        Response.success(res,201,'usuarios agregados correctamente',{});
    } catch (error) {
        Response.error(res);
    }
})
module.exports = router;