const AppError = require("./appError")


const tryCatchAsync = (fn) => {

    return async (req, res, next) => {

        try {

            await fn(req, res, next)
        }

        catch (error) {

            return next(new AppError(error.message, 404, error))
            
        }
    }

}


module.exports = tryCatchAsync