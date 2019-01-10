const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const MealSchema = new Schema({
    breakfast: String,
    lunch: String,
    dinner: String
});

module.exports = mongoose.model("MealSchema", Meal)