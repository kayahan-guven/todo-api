var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String
});

module.exports = mongoose.model('list', listSchema);
