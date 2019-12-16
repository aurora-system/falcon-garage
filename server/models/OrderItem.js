const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    orderItemId: {
        type: Number,
        required: true
    },
    orderId: {
        type: Number,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
})
mongoose.model('orderItems', OrderItemSchema)