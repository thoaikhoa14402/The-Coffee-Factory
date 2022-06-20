const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  status: { type: String },
  idUser: {
    type: String,
  },
  userName: {
    type: String,
  },
  address: { type: String, required: [true, 'Must have Product Name'] },
  phone: { type: String, required: [true, 'Must have Phone Number'] },
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
        type: Number,
        required: [true, 'Must have price'],
        validate: {
          validator: function () {
            return this.price >= 0;
          },
          message: 'price must greater or equal than 0',
        },
      },
      note: { type: String },
    },
  ],
  totalPrice: {type: String},
  noteAll: { type: String },
  dateOrder: { type: String },
});

const Order = mongoose.model('payment_history', orderSchema);

module.exports = Order;
