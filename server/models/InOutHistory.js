const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InOutHistorySchema = new Schema({

    tranDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    transType: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    productCount: {
        type: Number,
        required: true
    },
    prevCount: {
        type: Number,
        required: true
    }, 
    updatedCount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('InOutHistory', InOutHistorySchema);