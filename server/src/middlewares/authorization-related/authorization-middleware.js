// library
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

// importing model
import user_model from '../../models/user-model.js'

// importing utils
import AppError from '../utlis/error-handlers/app-error.js'
import tryCatchAsync from '../utlis/error-handlers/try-catch-async.js'



const protect = tryCatchAsync(async (req, res, next) => {

    // Checking if there is a token in the headers or not
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get the access.', StatusCodes.UNAUTHORIZED))
    }


    // verifying the token 
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)



    // the user belonging to the token exists or not in the database 
    const authorized_user = await user_model.findById(decoded.id)

    if (!authorized_user) {

        return next(new AppError('The user belonging to the token does no longer exist', StatusCodes.NOT_FOUND))

    }



    if (authorized_user.is_email_confirmed === false) {

        return next(new AppError('You must verify your email address before trying the access the route', StatusCodes.FORBIDDEN))

    }



    // the user was inactive more than 7 days or not
    const current_time_unix_timestamp = Date.now()
    const seven_days_in_milliseconds = 7 * 24 * 60 * 60 * 1000
    const user_last_access_unix_timestamp = authorized_user.last_access_unix_timestamp

    const seven_days_or_more_have_passed = current_time_unix_timestamp - seven_days_in_milliseconds >= user_last_access_unix_timestamp



    // if seven days or more have passed, return from the function
    if (seven_days_or_more_have_passed) {

        return next(new AppError('The user belonging to the token was not active for 7 or more days. The user needs to Sign in again.', StatusCodes.FORBIDDEN))
    }


    // if seven days or more haven't passed, don't return from the function and update the user's last access unix timestamp 
    else {

        await user_model.findOneAndUpdate(
            { _id: authorized_user._id },
            { last_access_unix_timestamp: Date.now() },
        )
    }



    // if everything is ok, that means the user is authorized and can access the protected route

    // Before calling the next(), we want to create req.user because we  will need that in the next restrictTo middleware
    req.user = authorized_user

    next()

})


const restrictTo = (...roles) => {

    return (req, res, next) => {

        // getting the req.user from the last 'protect' middleware
        if (!roles.includes(req.user.role)) {

            return next(new AppError('You do not have permission to perform this action', StatusCodes.FORBIDDEN))
        }

        next()
    }

}


export { 
    protect, 
    restrictTo 
}