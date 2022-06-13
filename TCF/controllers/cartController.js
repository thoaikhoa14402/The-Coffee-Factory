const Cart = require ('../models/cartModel.js')

exports.updateCart = async (req,res)=>{
    const checkUser = await Cart.exists({'idUser': req.body.idUser})
    if(!checkUser){
        const newUser= await Cart.create(req.body)
        console.log(req.body)
        res.status(200).json({ newUser})
    }
    else{
        const updateProduct = await Cart.updateOne(
            {idUser: req.body.idUser},
            {products: [...req.body.products]}
        )
        console.log(updateProduct)
        res.status(200).json(req.body.products)   
    }
}

exports.getCart = async (req,res)=>{
    const allOrders=await Cart.find({}, {'_id': false, '__v':false})
    res.status(200).json({
        status: 'success',
        size: allOrders.length,
        Cart: allOrders
    })
}