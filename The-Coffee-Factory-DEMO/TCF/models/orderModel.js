const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  status: { type: String },

  //Infomation
  idUser: { type: String},
  paymentMethod: { type: String },
  userName: { type: String, required: [true, 'Must have Phone Number']  },
  phone: { type: String, required: [true, 'Must have Phone Number'] },
  address: { type: String, required: [true, 'Must have Product Name'] },
  noteAll: { type: String },
  methodDelivery: {type: String},
  storeLocation: {type: String},
  promotion: {type: String},
  totalPrice: {type: Number},
  dateOrder: { type: String },
  
  // Product 
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
      image: { type: String }
    },  
  ],

});

const Order = mongoose.model('payment_history', orderSchema);

module.exports = Order;
