
// extending the Error object
class AppError extends Error {

    constructor(message, statusCode, ErrorObject) {

        // error message
        super(message)

        // statusCode
        this.statusCode = statusCode 

        // status (It will depend on the statusCode. If the range of status code is 400-499, we will show 'Failed' as the status. But anything else will have 'Server Error' status.)
        this.status = `${statusCode}`.startsWith('4') ? 'Failed' : 'Server Error'

        
        this.errorObject = ErrorObject


        // We are making a extra property(isOperational). We will use this  property in the production environment
        this.isOperational = true
    }

}



module.exports = AppError


// We can import and use this 'AppError' instead of the default 'Error' when we want to throw an error.