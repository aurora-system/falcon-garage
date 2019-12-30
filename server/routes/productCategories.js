const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Category Model
require('../models/ProductCategory');
const ProductCategory = mongoose.model('productCategories');

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
    let newProdCat = {categoryId: 2, name: 'Sample2'};
    new ProductCategory(newProdCat)
        .save()
        .then(prodCat => {
            console.log(prodCat);
            res.json(prodCat)
        })
});

module.exports = router;