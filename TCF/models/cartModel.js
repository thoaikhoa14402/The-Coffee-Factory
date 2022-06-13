const mongoose = require('mongoose')

const cartScheme = new mongoose.Schema({
    idUser: {type: String},
    products: [
        {
            productName: {type: String},
            quantity: {type: Number},
            topping: {type: String},
            price: {type: Number}
        }
    ]
})

const Cart = mongoose.model('shopping_cart', cartScheme)

module.exports = Cart