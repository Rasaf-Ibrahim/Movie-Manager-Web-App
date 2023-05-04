
const jwt_error = (err) => {

    if (err.errorObject.name === 'JsonWebTokenError') {

        return err.message = 'Invalid token.'

    }

    else if (err.errorObject.name === 'TokenExpiredError') {

        return err.message = 'The token has expired! '

    }


    else if (err.message && err.message.includes('secretOrPrivateKey')) {

        return err.message =  "The 'secretOrPrivateKey' that is used to sign and verify JWTs is either missing or not being provided with a value. To resolve this issue, ensure that you're passing the correct secret key while initializing the JWT library. Make sure that you're not passing an empty string or null value as the secret key."

    }

}

export default jwt_error