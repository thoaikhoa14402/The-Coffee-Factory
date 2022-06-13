const express = require('express')
const app = express()
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orderRoutes.js')
const cartRoutes = require('./routes/cartRoutes.js')
app.use(express.json())

app.use('/a',orderRoutes)
app.use('/b',cartRoutes)

module.exports=app