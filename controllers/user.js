const User = require('../models/User')

const userController = {
    create: (req, res) => {

        User.create({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            sex: req.body.sex
        }).then(newUser => {
            res.render('user/create', newUser);
        });
    }
}




module.exports = UserController