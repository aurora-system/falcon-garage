const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    categoryId: {
        type: Number,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    supplierId: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    yearModel: {
        type: String,
        required: false
    },
    version: {
        type: String,
        required: false
    },
    itemCode: {
        type: String,
        required: true
    },
    capital: {
        type: Number,
        required: true
    },
    srp: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

mongoose.model('products', ProductSchema);