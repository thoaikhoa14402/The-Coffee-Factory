const express = require('express')
const app = express()
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orderRoutes.js')

app.use(express.json())

app.use('/a',orderRoutes)  

module.exports=app