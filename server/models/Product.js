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
    otherDetails: {
        type: String,
        required: false
    },
    forVehicle: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: true
    },
    aquiPrice: {
        type: Number,
        required: true
    },
    srp: {
        type: Number,
        required: true
    },
    stockLevel: {
        type: Number,
        required: true
    }
});

mongoose.model('products', ProductSchema);