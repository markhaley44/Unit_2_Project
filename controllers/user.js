const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then(user => {
            res.render('app/index', { user });
        });
    },
    new: (req, res) => {
        res.render('app/new')
    },

    create: (req, res) => {
        User.create({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            sex: req.body.sex,
            meal: req.body.meal,
            workout: req.body.workout
        }).then(newUser => {
            res.redirect('/');
        })
    },
    show: (req, res) => {
        const userId = req.params.id
    }

}




module.exports = userController