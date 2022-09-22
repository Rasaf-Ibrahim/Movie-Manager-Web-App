
/* Usually, mongoose provides 3 kind of errors. But the error message that mongoose sends isn't pretty. Here, in this file, we are creating a mongooseError function to make the error message pretty. So, on the mongooseError function, we will only change the err.message if necessary conditions meet*/

const mongooseError = (err) => {

    // CastError (When mongoDB's _id property's size doesn't match)
    if (err.errorObject.name && err.errorObject.name === 'CastError') {
        return err.message = `No item found with id : ${err.errorObject.value}`
    }


    //  Any kind of duplicate key
    else if (err.errorObject.code && err.errorObject.code === 11000) {

        return err.message = `Duplicate value entered for ${Object.keys(
            err.errorObject.keyValue
        )} field, please choose another value`

    }


    //  validation error
    else if (err.errorObject.name && err.errorObject.name === 'ValidationError') {
        return err.message = Object.values(err.errorObject.errors)
            .map((item) => item.message)
            .join(',');

    }

}


module.exports = mongooseError