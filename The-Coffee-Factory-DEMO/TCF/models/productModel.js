const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: [String, { required: true }],
    price: [String, { required: true }],
    topping: [Array, { required: true }],
    img: [String, { required: true }],
    hiddenTitle: { type: String },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model('Product', productSchema);


module.exports = Product;
