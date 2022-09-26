const mongooseError = require("../utlis/mongooseError")
const jwtError = require('../utlis/jwtError')


/*  Express comes with a built-in error handler that takes care of any errors that might be encountered in the app.  If we pass an error to next() and we do not handle it in a custom error handler, it will be handled by the built-in error handler. The following function is the default express error handler. */


const globalErrorHandler = (err, req, res, next) => {


    let statusCode = err.statusCode || 500
    let status = `${statusCode}`.startsWith('4') ? 'Failed' : 'Server Error'



    // development environment
    if (process.env.NODE_ENV === 'development') {



        // only call the mongooseError & jwtError function, when there is a errorObject. Otherwise, the application can crash on some instances like on not-found route. 
        if (err.errorObject) {

            // the mongooseError function only changes the err.message
            mongooseError(err)

            // the jwtError function only changes the err.message.But here, I am changing the statusCode.
            jwtError(err, statusCode=401)

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


        // only call the mongooseError & jwtError function, when there is a errorObject. Otherwise, the application can crash on some instances like on not-found route. 
        if (err.errorObject) {

            // the mongooseError function only changes the err.message
            mongooseError(err)

            // the jwtError function only changes the err.message.But here, I am changing the statusCode.
            jwtError(err, statusCode=401)

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
            res.status(500).json({

                status: 'error',
                message: 'Something went wrong!'

            })

        }


    }



}

module.exports = globalErrorHandler