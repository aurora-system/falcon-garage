const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: String,
  address: String,
  contactNumber: {type: String, minlength: 8, maxlength: 13}
});

module.exports = mongoose.model('Customer', CustomerSchema);