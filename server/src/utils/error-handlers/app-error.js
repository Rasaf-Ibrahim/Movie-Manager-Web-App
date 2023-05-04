
// Define a custom class that inherits from the built-in Error class
class AppError extends Error {

    // Define a constructor that takes a message, a statusCode, and an ErrorObject as parameters
    constructor(message, statusCode, ErrorObject) {

        // Call the super constructor with the message to set the message property
        super(message)

        // Set the statusCode property to the given value
        this.statusCode = statusCode

        /* Set the status property based on the first digit of the statusCode
           If it starts with 4, it means a client error (e.g. 404 Not Found).If it starts with anything else, it means a server error (e.g. 500 Internal Server Error) 
        */
        this.status = `${statusCode}`.startsWith('4') ? 'Failed' : 'Server Error'

        // Set the errorObject property to the given value.
        this.errorObject = ErrorObject

        /* Set the isOperational property to true. This indicates that the error is expected and handled by our application logic. We can use this property to filter out operational errors from other unexpected errors in production.
        */
        this.isOperational = true
    }

}


// Export the AppError class 
export default AppError


