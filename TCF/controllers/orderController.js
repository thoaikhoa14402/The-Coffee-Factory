const Order = require ('../models/OrderModel.js')
const CatchAsync = require ('../utils/CatchAsync.js')
const AppError = require ('../utils/AppError.js')

exports.Order_Handle = CatchAsync(async (req, res, next)=>{
    var dateTime = require('node-datetime').create().format('H:M:S d-m-Y')
    const dataGet={
        status: "Unprocessed",
        idUser: req.body.idUser,
        userName: req.body.userName,
        address: req.body.address,
        phone: req.body.phone,
        products: [...req.body.products],
        noteAll: req.body.noteAll,
        dateOrder: dateTime
    }
    const newOrder= await Order.create(dataGet)
    res.status(200).json({
        status: 'success',
        newOrder
    })
})

exports.History_Admin = CatchAsync(async (req, res,next)=>{
    const allOrders=await Order.find({}, {'_id':false, '__v':false})
    res.status(200).json({
        status: 'success',
        size: allOrders.length,
        History: allOrders
    })
})

exports.History_User = CatchAsync(async (req, res,next)=>{
    const Orders = await Order.find(
        {idUser: req.body.idUser}, 
        {'_id':false, '__v':false, 'idUser': false, 'userName': false, 'address': false, 'phone': false}
    )
    if(Orders.length===0){ 
        return next(new AppError('No tour with this ID', 404)) 
    }
    res.status(200).json({
        status: 'success',
        size: Orders.length,
        History: Orders
    })
})

