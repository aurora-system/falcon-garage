const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCatergorySchema = new Schema({
    category_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
})
mongoose.model('productCategories', ProductCatergorySchema)