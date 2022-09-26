const jwt = require('jsonwebtoken')

const UserModel = require('../models/userModel')
const AppError = require('../utlis/appError')
const tryCatchAsync = require('../utlis/tryCatchAsync')





const protect = tryCatchAsync(async (req, res, next) => {

    // Checking if there is a token in the headers or not
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        return next(new AppError('You are not logged in! Please log in to get the access.', 401))
    }



    // verifying the token (decoded will be an object which will have 'id', 'iat' & 'exp' property.)

     const decoded = await jwt.verify(token, process.env.JWT_SECRET)



    // the user belonging to the token exists or not  after the token is issued (what if the user is deleted just after the token is issued)

    const authorizedUser = await UserModel.findById(decoded.id)

    if(!authorizedUser) {

        return next(new AppError('The user belonging to the token does no longer exist', 401))

    }


    // password is changed or not after the token is issued 
    const passwordChanged = authorizedUser.passwordIsChangedAfterTheTokenIsIssued(decoded.iat)

    if(passwordChanged) {
        return next(new AppError('User has recently changed the password. Please log in again.', 401))
    }



    // if everything is ok, that means the user is authorized and can access the protected route

    // Before calling the next(), we want to create req.user because we  will need  that in the next restrictTo middleware
    req.user = authorizedUser

    next()

})




const restrictTo = (...roles) => {

    return (req, res, next) => {

        // getting the req.user from the last 'protect' middleware
        if(!roles.includes(req.user.role)) {

            return next(new AppError('You do not have permission to perform this action', 403))
        }

        next()
    }

}


module.exports = {protect, restrictTo }