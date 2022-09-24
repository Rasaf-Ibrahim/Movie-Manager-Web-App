const express = require('express')

const router = express.Router()


const {getAllUsers} = require('../controllers/userController')
const {signupUser, loginUser} = require('../controllers/authController')


router.route('/').get(getAllUsers)

// login route
router.route('/login').post(loginUser)


// signup route
router.route('/signup').post(signupUser)


// forgotPassword
// router.route('/forgotPassword').post(forgotPassword)


// resetPassword
// router.route('/resetPassword/:resetToken').put(resetPassword)



module.exports = router 