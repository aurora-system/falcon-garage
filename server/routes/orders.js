const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Order');
const Order = mongoose.model('orders');

// list all orders
router.get('/', function(req, res, next) {
  Order.find()
    .sort({name: 'asc'})
    .then(orders => {
        console.log(orders);
        res.json(orders);
    })
});

router.post('/', function(req, res, next) {
    let newOrder = {
        orderId: req.body.orderId, 
        type: req.body.type, 
        customerName: req.body.customerName,
        createdDate: new Date() 
    };
    
    new Order(newOrder)
        .save()
        .then(ord => {
            console.log(ord);
            res.json(ord)
        })
});

module.exports = router;