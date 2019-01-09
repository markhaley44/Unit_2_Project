const Workout = require('..models/Workout')
const User = require('..models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Kevin Hart",
            age: 34,
            weight: "185lbs",
            sex: male
        })
            .then((user) => {
                Promise.all([user]).then(() => {
                    user.save()
                })
            })
    })