const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app.js')

const DB='mongodb+srv://giahuy200202:0904974018huyyy@cluster0.mooayuv.mongodb.net/The-Coffee-Factory?retryWrites=true&w=majority'
mongoose.connect(DB).
    then(con=>{
    console.log('DB connection successful')
})

app.listen(3000, '127.0.0.1')