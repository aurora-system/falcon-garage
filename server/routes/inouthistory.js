const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load model
require('../models/InOutHistory');
const History = mongoose.model('InOutHistory');

// list history for a product
router.get('/:id', function(req, res, next) {
    History.find({productId: req.params.id})
        .then(hist => {
            res.json(hist)
        })
});

// save in/out entry for a product
router.post('/:id', function(req, res, next) {
    let item = {
        //date:
        transType: req.body.transType,
        productId: req.params.id,
        productCount: req.body.productCount
    };
    new History(item)
        .save()
        .then(hist => {
            console.log(hist);
            res.json(hist);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        });
});

module.exports = router;