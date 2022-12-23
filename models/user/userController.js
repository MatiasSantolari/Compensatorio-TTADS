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

//generador de datos falsos
const getFakeData = async () => {
    let sexo = faker.name.sexType();
    let nombres = faker.name.fullName(sexo);
    let apellido = faker.name.lastName();
    return{
    sex : sexo,
    name : nombres,
    surname : apellido,
    email : faker.helpers.unique(faker.internet.email, [
        nombres,
        apellido,
      ]),
    birthday : faker.date.birthdate(),
    avatar : faker.image.avatar(sexo)
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

//deleteAll
router.delete('/',async(req,res) => {
    try {
        await userModel.deleteMany();
        Response.success(res, 200, 'Monstruo eliminado del bestiario');
    } catch (error) {
        Response.error(error);
    }
})
module.exports = router;