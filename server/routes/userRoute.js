const express = require('express')

const router = express.Router()


const {getAllUsers} = require('../controllers/userController')

const {signupUser, loginUser} = require('../controllers/authController')

const {protect, restrictTo} = require('../middleware/authMiddleware')


router.route('/').get(protect, restrictTo('admin'), getAllUsers)


// login route
router.route('/login').post(loginUser)


// signup route
router.route('/signup').post(signupUser)



module.exports = router 