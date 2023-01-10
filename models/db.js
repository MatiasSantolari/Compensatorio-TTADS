const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = mongoose
    .connect(process.env.MONGODB_URI)
    .then( () => console.log("Conexión a MongoDB establecida") )
    .catch(() => console.error())

let mongo = undefined;

module.exports.setUp = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
    });
};

module.exports.dropDatabase = async () => {
    if (mongo) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongo.stop();
    }
};

module.exports.dropCollections = async () => {
    if (mongo) {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
};


module.exports = dbConnection;