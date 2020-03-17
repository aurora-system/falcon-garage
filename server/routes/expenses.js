const router = require('express').Router();

// load Product Model
const Expense = require('../models/Expense');

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