const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.get('/', function(req, res) {
    List.find().then((lists) => {
        res.json(lists);
    }).catch((err) => {
        res.json(err);
    });
});

router.post('/', function(req, res) {
    new List({
        name: req.body.name,
    }).save().then(() => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });
});

router.put('/:id', function(req, res) {
    List.findByIdAndUpdate({'_id': req.params.id}, req.body).then((newList) => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });

});

router.delete('/:id', function(req, res) {
    List.findByIdAndRemove(req.params.id).then(() => {
        res.json({ success: true });
    }).catch((err) => {
        res.json({ success: false });
    });

});

module.exports = router;
