const router = require('express').Router();

// load model
const InOutHistory = require('../models/InOutHistory');
const Product = require('../models/Product')

// list history for a product
router.get('/:productId', function(req, res, next) {
    let product = {}
    Product.findOne({productId:req.params.productId})
        .then(item => {
            product = item._doc
            console.log(product)
        })
    InOutHistory.find({productId: req.params.productId})
        .then(history => {
            let result = history.map(item => {
                console.log(item)
                return {...item._doc, product}
            })
            res.json(result)
        })
});

// save in/out entry for a product
router.post('/', function(req, res, next) {
    let item = {
        transDate: req.body.transDate,
        transType: req.body.transType,
        productId: req.body.productId,
        productCount: req.body.productCount,
        prevCount: req.body.prevCount,
        updatedCount: req.body.updatedCount
    };
    //let {item} = req.body;
    new InOutHistory(item)
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

// save in/out entry for a product
router.post('/:id', function(req, res, next) {
    let item = {
        //date:
        transType: req.body.transType,
        productId: req.params.id,
        productCount: req.body.productCount,
        prevCount: req.body.prevCount,
        updatedCount: req.body.updatedCount
    };
    new InOutHistory(item)
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