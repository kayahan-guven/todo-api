var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');

router.get('/', function(req, res) {
    Todo.find().then((todos) => {
        res.json(todos);
    }).catch((err) => {
        res.json(err);
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
