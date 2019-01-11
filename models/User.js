const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number,
    weight: String,
    sex: String,
    meal: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    workout: [{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }]



});

module.exports = mongoose.model("User", UserSchema);