const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InOutHistorySchema = new Schema({

    trans_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    trans_type: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    }
})

mongoose.model('InOutHistory', InOutHistorySchema)