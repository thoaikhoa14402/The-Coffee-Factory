const mongoose = require('mongoose')
const app = require('./app.js')

mongoose.connect('mongodb+srv://hcmusgroup06:Hcmus_Group06@group06.zyevf.mongodb.net/The_Coffee_Factory?retryWrites=true&w=majority').then(con=>{
    console.log('DB connection successful')
})

app.listen(3000, '127.0.0.1')