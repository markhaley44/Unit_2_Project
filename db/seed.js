const Workout = require('../models/Workout')
const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Kevin Hart",
            age: 34,
            weight: "185lbs",
            sex: "male",
            workout: [],
            meal: []
        })
            .then((getFit) => {
                const workoutA = Workout.create({
                    dips: "10reps",
                    pullups: "10reps",
                    pushups: "10reps"
                }).then((newWorkout) => {
                    getFit.workout.push(newWorkout)
                })
                Promise.all([workoutA])
                    .then(() => {
                        getFit.save()
                    })
            })
    })





// const WorkoutB = new Workout({
//     benchpress: "135lbs",
//     legpress: "225lbs",
//     powerclings: "95lbs"
// })


// User.remove({})
//     .then(() => Workout.remove({}))
//     .then(() => Workout.insertMany([WorkoutA, WorkoutB]))
//     .then(() => User.insertMany([Kevin]))