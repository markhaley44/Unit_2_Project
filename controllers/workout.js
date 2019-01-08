const Workout = require('..models/Workout')

const WorkoutController = {
    index: (req, res) => {
        Workout.find({}).then(workout => {
            res.render('app/index', { workouts })
        })
    }
}



module.exports = WorkoutController;