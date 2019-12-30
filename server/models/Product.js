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
        required: false
    },
    aqui_price: {
        type: Number,
        required: true
    },
    srp: {
        type: Number,
        required: true
    },
    stock_level: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    supplier_name: {
        type: String,
        required: true
    }, 
    
});

mongoose.model('Product', ProductSchema);