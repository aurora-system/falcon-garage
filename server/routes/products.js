const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Product');
const Product = mongoose.model('Product');

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
    Product.find({ categoryId: req.params.id })
      .sort({name: 'asc'})
      .then(products => {
          console.log(products);
          res.json(products);
      })
  });

// get product by _id
router.get('/id=:id', function(req, res, next) {
    Product.findById({ _id: req.params.id })
      .then(product => {
          console.log(product);
          res.json(product);
      })
  });

router.post('/', function(req, res, next) {
    let newProd = {
        productId: req.body.productId, 
        name: req.body.name, 
        brand: req.body.brand, 
        other_details: req.body.other_details, 
        for_vehicle: req.body.for_vehicle, 
        color: req.body.color, 
        aqui_price: req.body.aqui_price,
        srp: req.body.srp,
        stock_level: req.body.stock_level,
        categoryId: req.body.categoryId,
        supplier_name: req.body.supplier_name
    };
    //console.log('req.body:', req.body)
    //console.log('newProd', newProd)
    new Product(newProd)
        .save()
        .then(prod => {
            console.log(prod);
            res.json(prod)
        })
        .catch(err => console.log(err))
});

module.exports = router;