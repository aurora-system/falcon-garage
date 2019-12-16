const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Product');
const ProductCategory = mongoose.model('products');

// list all products
router.get('/', function(req, res, next) {
  ProductCategory.find()
    .sort({name: 'asc'})
    .then(products => {
        console.log(products);
        res.json(products);
    })
});

router.post('/', function(req, res, next) {
    let newCat = {categoryId: 2, name: 'Sample2'};
    new ProductCategory(newCat)
        .save()
        .then(cat => {
            console.log(cat);
            res.json(cat)
        })
});

module.exports = router;