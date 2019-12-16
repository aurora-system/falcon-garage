const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCatergorySchema = new Schema({
    categoryId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
})
mongoose.model('productCategories', ProductCatergorySchema)