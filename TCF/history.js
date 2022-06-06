const express = require('express')
const app = express()
const mongoose=require('mongoose')

module.exports = class History{

    Connect_Database(){
        mongoose.connect('mongodb+srv://hcmusgroup06:Hcmus_Group06@group06.zyevf.mongodb.net/The_Coffee_Factory?retryWrites=true&w=majority').then(con=>{
            console.log('DB connection successful')
        })
    }

    Create_Scheme(){
        return new mongoose.Schema({
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
    }

    Order_Handle(Order){
        return (req, res)=>{
            var dateTime = require('node-datetime').create().format('H:M:S d-m-Y')
            const dataGet={
                status: "Unprocessed",
                idUser: req.body.idUser,
                userName: req.body.userName,
                address: req.body.address,
                phone: req.body.phone,
                productName: req.body.productName,
                toppings: req.body.toppings,
                quantity: req.body.quantity,
                price: req.body.price,
                dateOrder: dateTime
            }
            res.status(200).send(dataGet)
            const newOrder=Order(dataGet)
            newOrder.save().then(doc=>{
                console.log(doc)
            })
        }
    }

    History_Handle(Order){
        return async (req, res)=>{
            const allOrders=await Order.find({}, {'_id':false, '__v':false})
            res.status(200).json({
                status: 'success',
                size: allOrders.length,
                History: allOrders
            })
        }
    }

    API_Handle(Order){
        app.use(express.json())
        app.route('/a/')
            .post(this.Order_Handle(Order))
            .get(this.History_Handle(Order))
        app.listen(3000, '127.0.0.1')
    }

    Run(){
        this.Connect_Database()
        const Order = mongoose.model('payment_history', this.Create_Scheme())
        this.API_Handle(Order)
    }
}
