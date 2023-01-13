const express = require('express');
const clientModel = require('./clientModel');
const router = express.Router();
const { Response } = require('../../response');
const createError = require('http-errors');

const mongoose = require('mongoose');
const fakery = require('mongoose-fakery');


//getAll
router.get('/', async(req, res) => {
    try {
        let clients = await clientModel.find();
        Response.success(res, 200, 'Listado de clientes', clients.toString());
    } catch (error) {
        Response.error(res);
    }
})

const createFakeData = async () => {
    //generador de datos falsos
    fakery.fake('client', mongoose.model('clients'), {
        name: fakery.g.name(),
        surname: fakery.g.surname(),
        email: fakery.lazy(function(attrs){
            // this will return name@example.com
            return attrs.name + '@example.com';
        })
    });

    let userFakery = await fakery.fake('client');
    return userFakery;
}
//create
router.post('/', async(req, res) => {
    try {
        for (let i = 0; i < 10; i++){
            const fakeJsonData = await createFakeData();
            await clientModel.create(fakeJsonData);
        };
        Response.success(res,201,'clientes agregados correctamente',{});
    } catch (error) {
        Response.error(res);
    }
})

//deleteAll
router.delete('/',async(req,res) => {
    try {
        await clientModel.deleteMany();
        Response.success(res, 200, 'clientes eliminados correctamente');
    } catch (error) {
        Response.error(error);
    }
})
module.exports = router;