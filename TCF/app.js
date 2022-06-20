const express = require('express')
const app = express()
const OrderRoutes = require('./routes/OrderRoutes.js')
const CartRoutes = require('./routes/CartRoutes.js')
const AppError = require('./utils/AppError')
const GlobalErrorHandle = require ('./controllers/ErrorController.js')
app.use(express.json())

app.use('/a', OrderRoutes)
app.use('/b', CartRoutes)

app.all('*', (req, res, next)=>{
    next(new AppError('Url is not available', 404))
})

app.use(GlobalErrorHandle)

module.exports=app