const Meal = require('../models/Meal')

const mealController = {
    index: (req, res) => {
        Meal.find({}).then(meal => {
            res.render('app')
        })
    },
    new: (req, res) => {
        res.render('')
    }

}



module.exports = mealController;