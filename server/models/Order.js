const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    /*orderId: {
        type: Number,
        required: true,
    },*/
    type: {
        type: String,
        required: true
    },
    customer_name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    remarks: {
        type: String,
        required: false
    },
    reference_num: {
        type: String,
        required: true
    }
})
mongoose.model('orders', OrderSchema)