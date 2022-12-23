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

const getFakeData = async () => {
    let nombres = faker.name.fullName();
    let apellido = faker.name.lastName();
    return{
    name : nombres,
    surname : apellido,
    email : faker.internet.email(nombres,apellido)
    }
}
//create
router.post('/', async(req, res) => {
    try {
        for (let i = 0; i < 10; i++){
            const fakeJsonData = await getFakeData();
            await userModel.create(fakeJsonData);
        };
        Response.success(res,201,'usuarios agregados correctamente',{});
    } catch (error) {
        Response.error(res);
    }
})
module.exports = router;