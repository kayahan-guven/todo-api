var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    date: Date,
    listId: Number,
    completed: Boolean
});

module.exports = mongoose.model('todo', todoSchema);
