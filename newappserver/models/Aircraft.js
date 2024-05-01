const mongoose = require('mongoose')

const AirplaneSchema = new mongoose.Schema({
    arriveairport: String,
    depart: String,
    planecode: String,
    seats: Number,
})

const AirplaneModel = mongoose.model("planes",AirplaneSchema)
module.exports = AirplaneModel