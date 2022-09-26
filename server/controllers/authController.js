const jwt = require('jsonwebtoken')

const UserModel = require('../models/userModel')
const AppError = require('../utlis/appError')
const tryCatchAsync = require('../utlis/tryCatchAsync')



// jwt sign token
const signToken = (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN

  })

}



/* 
Description:  Register a user

Method: POST

Route: api/user/signup

Access: Public

*/


const signupUser = tryCatchAsync(async (req, res, next) =>{


        const {username, email, password, passwordConfirm, role} = req.body

        const newUser = await UserModel.create({username, email, password, passwordConfirm, role})

        const token = signToken(newUser._id)


        res.status(201).json({

            status: 'success',
            token, 
            data: {
                user: newUser
            }
        })


    })







/* 
Description:  Login a user

Method: POST

Route: api/user/login

Access: Public

*/


const loginUser = tryCatchAsync(async(req, res, next) => {


        // check if the user has provided the email and password    
        const {email, password} = req.body

        if(!email || !password ) {
            return next(new AppError('Please provide both your email and password', 400))
        }


        // Check if user exists 
        const user = await UserModel.findOne({email}).select('+password')

        // check if password is correct
        let correctPassword;
        if(user) {
           correctPassword = await user.comparePassword(password, user.password)
        }

        // If either user doesn't exist or password doesn't match, send an error message
        if(!user || !correctPassword) {
            return next(new AppError('Incorrect Email or Password', 401))
        }


        // If everything's ok, send token to client
        const token = signToken(user._id)

        res.status(200).json({

            status: 'success',
            token
        })




    })










module.exports = {signupUser, loginUser}

