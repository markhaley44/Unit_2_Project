const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number,
    weight: String,
    sex: String,
    meal: String,
    workout: []



});

module.exports = mongoose.model("User", UserSchema);