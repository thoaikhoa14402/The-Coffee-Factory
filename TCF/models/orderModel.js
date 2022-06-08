const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    status: {type: String,},
    idUser: { type: String,},
    userName: { type: String,},
    address: { type: String, },
    phone: { type: String, },
    productName: {type: String},
    toppings: { type: String, },
    quantity: {type: Number,} ,
    price: {type: Number, },
    dateOrder: {type: String, }
})

const Order = mongoose.model('payment_history', orderSchema)

module.exports = Order