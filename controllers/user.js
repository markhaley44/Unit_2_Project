const User = require('../models/User')
const Meal = require('../models/Meal')
const userController = {
    index: (req, res) => {
        User.find({}).then(user => {
            res.render('app/index', { user });
            console.log('hello')
        }).catch((err) => {
            console.log(err)
        })
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
        User.findById(userId).then((user) => {
            console.log(user)
            res.render('app/show', { user })
        })
    },
    edit: (req, res) => {
        const userId = req.params.id
        res.render('app/edit')
    },
    update: (req, res) => {
        const userId = req.params.id
        User.findByIdAndUpdate(userId, req.body, { new: true }).then((user) => {
            res.redirect('/')
        })
    },
    delete: (req, res) => {
        const userId = req.params.id
        User.findByIdAndDelete(userId).then(() => {
            res.redirect('/')
        })
    }

}




module.exports = userController