

/* Usually, jwt provides 2 kind of errors. But the error message that jwt sends isn't pretty. Here, in this file, we are creating a jwtError function to make the error message pretty. So, on the jwtError function, we will only change the err.message if necessary conditions meet*/



const jwtError = (err) => {

    if(err.errorObject.name === 'JsonWebTokenError') {

        return err.message = 'Invalid  token. Please login again'

    }

    else if(err.errorObject.name === 'TokenExpiredError') {

        return err.message = 'Your token has expired! Please login again.'

    }


}

module.exports = jwtError