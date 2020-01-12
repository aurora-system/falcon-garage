const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Category Model
require('../models/ProductCategory');
const ProductCategory = mongoose.model('ProductCategory');

// list all product categories
router.get('/', function(req, res, next) {
  ProductCategory.find()
    .sort({name: 'asc'})
    .then(productCategories => {
        console.log(productCategories);
        res.json(productCategories);
    })
});

router.post('/', function(req, res, next) {
    let newProdCat = {categoryId: req.body.categoryId, name: req.body.name};
    new ProductCategory(newProdCat)
        .save()
        .then(prodCat => {
            console.log(prodCat);
            res.json(prodCat)
        })
});

router.put('/', function(req, res, next) {
    let prodCat = {categoryId: req.body.categoryId, name: req.body.name}
    new ProductCategory(prodCat)
        .updateOne()
        .then(cat => {
            console.log(cat)
            res.json(cat)
        })
});

module.exports = router;