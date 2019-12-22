const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Product');
const Product = mongoose.model('products');

// list all products
router.get('/', function(req, res, next) {
  Product.find()
    .sort({name: 'asc'})
    .then(products => {
        console.log(products);
        res.json(products);
    })
});

// list products for a given category
router.get('/category=:id', function(req, res, next) {
    Product.find({ category_id: req.params.id })
      .sort({name: 'asc'})
      .then(products => {
          console.log(products);
          res.json(products);
      })
  });

router.post('/', function(req, res, next) {
    let newProd = {productId: 2, name: 'Sample2', cost: "100"};
    new Product(newProd)
        .save()
        .then(prod => {
            console.log(prod);
            res.json(prod)
        })
});

module.exports = router;