const express = require('express')
const router = express.Router()
const userController = require('../controllers/user');
const workoutController = require('../controllers/workout');

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/', userController.show)



module.exports = router