const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const WorkoutSchema = new Schema({
    workoutType: String,
    completed: Boolean,
    

});





module.exports = mongoose.model('Workout', WorkoutSchema);