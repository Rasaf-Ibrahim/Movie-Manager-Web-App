// importing packages
import { StatusCodes } from 'http-status-codes'

// importing utils
import mongoose_error from "../utlis/error-handlers/mongoose-error.js"
import jwt_error from '../utlis/error-handlers/jwt-error.js'



const global_error_handler_middleware = (err, req, res, next) => {


    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR

    let status = `${statusCode}`.startsWith('4') ? 'Failed' : 'Server Error'



    // development environment
    if (process.env.NODE_ENV === 'development') {



        // only call the mongoose_error & jwt_error function, when there is a errorObject. Otherwise, the application can crash on some instances like on not-found route. 
        if (err.errorObject) {

            // the mongoose_error function only changes the err.message
            mongoose_error(err)

            // the jwt_error function only changes the err.message.But here, I am changing the statusCode.
            jwt_error(err, statusCode)

        }


        res.status(statusCode).json({

            status: status,
            message: err.message,
            stack: err.stack,
            err: err

        })


    }



    // production environment (we have to be careful)
    else if (process.env.NODE_ENV === 'production') {


        // only call the mongoose_error & jwt_error function, when there is a errorObject. Otherwise, the application can crash on some instances like on not-found route. 
        if (err.errorObject) {

            // the mongoose_error function only changes the err.message
            mongoose_error(err)

            // the jwt_error function only changes the err.message.But here, I am changing the statusCode.
            jwt_error(err, statusCode)

        }


        // Operational, trusted Error: send message to the client
        if (err.isOperational) {

            res.status(statusCode).json({

                status: status,
                message: err.message

            })
        }



        // programming or other unknown error: don't leak error details
        else {

            // 1) Log error
            console.error('ERROR Stack 💥', err)


            // 2) send generic message
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({

                status: 'error',
                message: 'Something went wrong!'

            })

        }


    }



}

export default global_error_handler_middleware