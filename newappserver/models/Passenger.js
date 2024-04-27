const mongoose = require('mongoose')

const PassengerSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    uname: String,
    phone: String,
    email: String,
    passport: String,
    password: String,
    
})

const PassengerModel = mongoose.model("passengers",PassengerSchema)
module.exports = PassengerModel