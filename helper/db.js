var mongoose = require('mongoose');
require('dotenv').config()

module.exports = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ekmmj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}
