const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/list', function(req, res) {
    Todo.find().then((todos) => {
        res.json(todos);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/:id', function(req, res) {
    Todo.findById({'_id': req.params.id}, req.body).then((todo) => {
        res.json(todo);
    }).catch((err) => {
        res.json({ success: false });
    });

});

router.post('/', function(req, res) {
    new Todo({
        title: req.body.title,
        date: req.body.date,
        completed: req.body.completed,
    }).save().then(() => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });
});

router.put('/:id', function(req, res) {
    const id = req.params.id;

    Todo.findByIdAndUpdate({'_id': id}, req.body).then((newTodo) => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });

});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    Todo.findByIdAndRemove(id).then(() => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });

});

module.exports = router;
