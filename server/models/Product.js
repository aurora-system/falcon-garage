const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category_id: {
        type: Number,
        required: true
    },
    product_id: {
        type: Number,
        required: true
    },
    supplier_id: {
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
    other_details: {
        type: String,
        required: false
    },
    for_vehicle: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: true
    },
    aqui_price: {
        type: Number,
        required: true
    },
    srp: {
        type: Number,
        required: true
    },
    costock_level: {
        type: Number,
        required: true
    }
});

mongoose.model('products', ProductSchema);