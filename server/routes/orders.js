const router = require('express').Router();

// load Product Model
const Order = require('../models/Order');

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
        createdDate: req.body.order.createdDate,
        totalAmount: req.body.order.totalAmount,
        paymentType: req.body.order.paymentType,
        monthlyDueDate: req.body.order.monthlyDueDate,
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