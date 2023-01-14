const mongoose = require('mongoose');
const Seeder = require('mongo-seeding').Seeder;
const db = require('../models/db');

const Book = require('./bookModel');

const seeder = new Seeder(db);
const collections = seeder.readCollectionsFromPath('./data');

seeder
  .import(collections)
  .then(() => {
    console.log('Data seeded successfully!');
  })
  .catch(err => {
    console.log('Error seeding data: ', err);
  });