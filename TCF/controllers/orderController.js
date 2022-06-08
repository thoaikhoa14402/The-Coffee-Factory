const Order = require ('../models/orderModel.js')

exports.Order_Handle = (req, res)=>{
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

exports.History_Admin = async (req, res)=>{
    const allOrders=await Order.find({}, {'_id':false, '__v':false})
    res.status(200).json({
        status: 'success',
        size: allOrders.length,
        History: allOrders
    })
}

exports.History_User = async (req, res)=>{
    const Orders=await Order.find(
        {idUser: req.body.id}, 
        {'_id':false, '__v':false, 'idUser': false, 'userName': false, 'address': false, 'phone': false}
    )
    res.status(200).json({
        status: 'success',
        size: Orders.length,
        History: Orders
    })
}