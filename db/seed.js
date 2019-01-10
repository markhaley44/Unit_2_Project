const Workout = require('../models/Workout')
const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Kevin Hart",
            age: 34,
            weight: "185lbs",
            sex: "male",
            workout: "calisthenics",
            meal: []
        })
            .then((user) => {
                Promise.all([user]).then(() => {
                    user.save()
                })
            })
    })
const WorkoutA = new Workout({
    dips: "10reps",
    pullups: "10reps",
    pushups: "10reps"
})

const WorkoutB = new Workout({
    benchpress: "135lbs",
    legpress: "225lbs",
    powerclings: "95lbs"
})

const Kevin = new User({
    name: "Kevin Hart",
    age: 34,
    weight: "185lbs",
    sex: "male"
})

User.remove({})
    .then(() => Workout.remove({}))
    .then(() => Workout.insertMany([WorkoutA, WorkoutB]))
    .then(() => User.insertMany([Kevin]))