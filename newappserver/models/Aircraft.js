const mongoose = require('mongoose')

const AirplaneSchema = new mongoose.Schema({
    planecode: String,
    departairpot: String,
    arriveairport: String,
    seats: Number,
})

const AirplaneModel = mongoose.model("planes",AirplaneSchema)
module.exports = AirplaneModel