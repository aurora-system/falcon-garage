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
    customerName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    remarks: {
        type: String,
        required: false
    },
    referenceNum: {
        type: String,
        required: true
    },
    products: {
        type: Object,
        required: false
    }

})
mongoose.model('orders', OrderSchema)