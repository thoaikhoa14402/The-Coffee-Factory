const mongoose = require('mongoose');

const cartScheme = new mongoose.Schema({
  idUser: { type: String },
  products: [
    {
      productName: { type: String, required: [true, 'Must have Product Name'] },
      quantity: {
        type: Number,
        required: [true, 'Must have quantity'],
        validate: {
          validator: function () {
            return this.quantity > 0;
          },
          message: 'quantity must greater than 0',
        },
      },
      topping: { type: String },
      price: {
        type: String,
        required: [true, 'Must have price'],
        validate: {
          validator: function () {
            return this.price.slice(0,-1)*1000 >= 0;
          },
          message: 'price must greater or equal than 0',
        },
      },
      note: { type: String },
      image: { type: String },
    },
  ],
  totalPrice:{type:Number}
});

const Cart = mongoose.model('shopping_cart', cartScheme);

module.exports = Cart;
