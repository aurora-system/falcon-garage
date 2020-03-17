const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId: {
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
        required: false
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
    },
    threshold: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    supplierName: {
        type: String,
        required: true
    }, 
    
});

module.exports = mongoose.model('Product', ProductSchema);