const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Meal = new Schema({
    mealtime: String,
    calories: Number,
    proteinGrams: Number
});

module.exports = mongoose.model("Meal", Meal)