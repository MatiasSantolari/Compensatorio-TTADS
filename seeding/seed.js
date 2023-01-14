const mongoose = require('mongoose');
const Seeder = require('mongo-seeding').Seeder;
const db = require('../models/db');
const path = require('path');
const Book = require('./bookModel');

const seeder = new Seeder(db);
const bookData = path.join(__dirname, 'data', 'books.json');
const collections = seeder.readCollectionsFromPath(bookData);

seeder
  .import(collections)
  .then(() => {
    console.log('Data seeded successfully!');
  })
  .catch(err => {
    console.log('Error seeding data: ', err);
  });