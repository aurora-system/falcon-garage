const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: String,
    contactNumber: {type: String, minlength: 8, maxlength: 13}
});

module.exports = mongoose.model('Supplier', SupplierSchema);