const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Product
const ProductSchema = new Schema({
  productImage: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  action: {
    type: Boolean,
    required: true
  },
  popular: {
    type: Boolean,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  model: {
    type: String
  }
});

module.exports = Product = mongoose.model('product', ProductSchema);
