const router = require('express').Router();

// load Product Model
const Product = require('../models/Product');

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
router.get('/?category=:id', function(req, res, next) {
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
        otherDetails: req.body.otherDetails, 
        forVehicle: req.body.forVehicle, 
        color: req.body.color, 
        aquiPrice: req.body.aquiPrice,
        srp: req.body.srp,
        stockLevel: req.body.stockLevel,
        categoryId: req.body.categoryId,
        supplierName: req.body.supplierName,
        threshold: req.body.threshold
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