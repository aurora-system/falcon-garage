const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Order');
const Order = mongoose.model('Order');

// list all orders
router.get('/', function(req, res, next) {
  Order.find()
    .sort({name: 'asc'})
    .then(orders => {
        console.log(orders);
        res.json(orders);
    })
});

router.post('/', async (req, res) => {

    let newOrder = {
        type: req.body.order.type,
        customerName: req.body.order.customerName,
        createdDate: new Date(),
        referenceNum: Math.floor(100000 + Math.random() * 900000),
        remarks: req.body.order.remarks,
        products: req.body.order.products
    };
    
    new Order(newOrder)
        .save()
        .then(ord => {
            console.log(ord);
            res.json(ord)
        })
});

module.exports = router;