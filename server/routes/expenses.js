const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load Product Model
require('../models/Expense');
const Expense = mongoose.model('Expense');

// list all expenses
router.get('/', function(req, res, next) {
  Expense.find()
    .sort({name: 'asc'})
    .then(expenses => {
        console.log(expenses);
        res.json(expenses);
    })
});

router.post('/', async (req, res) => {

    let newExpense = {
        type: req.body.expense.type,
        expenseDate: new Date(),
        totalAmount: req.body.expense.totalAmount,
        remarks: req.body.expense.remarks
    };
    
    new Expense(newExpense)
        .save()
        .then(exp => {
            console.log(exp);
            res.json(exp)
        })
});

module.exports = router;