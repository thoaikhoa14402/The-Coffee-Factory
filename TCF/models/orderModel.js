const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    status: {type: String,},
    idUser: { 
        type: String, 
        required: [true,'Must have ID User']
    },
    userName: { 
        type: String,
        required: [true,'Must have User Name'], 
    },
    address: { type: String,},
    phone: { type: String,},
    productName: { 
        type: String,
        required: [true,'Must have Product Name'],
    },
    toppings: { type: String,},
    quantity: { 
        type: Number,
        required: [true,'Must have quantity'], 
        validate: {
            validator: function(){
                return this.quantity > 0
            },
            message: 'quantity must greater than 0'
        }
    },
    price: { 
        type: Number,
        required: [true,'Must have price'], 
        validate: {
            validator: function(){
                return this.price >= 0
            },
            message: 'price must greater or equal than 0'
        }
    },
    dateOrder: {type: String,}
})

const Order = mongoose.model('payment_history', orderSchema)

module.exports = Order