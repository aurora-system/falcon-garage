const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    remarks: {
        type: String,
        required: false
    },
    expenseDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);