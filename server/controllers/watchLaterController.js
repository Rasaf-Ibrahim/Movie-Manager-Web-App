const WatchLaterModel = require('../models/watchLaterModel')

const AppError = require('../utlis/appError.js')





/* 

Description:  Fetch all the  watch later movies 

Method: GET

Route: /api/favorites

Access: Private

*/

const fetchWatchLaterMovies = async (req, res, next) => {

    try {

        const watchLaterMovies = await WatchLaterModel.find({}).sort({ createdAt: -1 })

        res.status(200).json(watchLaterMovies)
    }


    catch(error) {

        return next(new AppError(error.message, 404, error))

    }


}





/* 

Description:  Search a specific watch later movie 

Method: GET

Route: /api/watch-later/:id

Access: Private

*/


const searchWatchLaterMovie = async (req, res, next) => {


    try {

        const { id } = req.params


        // checking whether any watch later movie exits with that imdbID or not
        const watchLaterMovie = await WatchLaterModel.findOne({ imdbID: id })
    
        
        if (!watchLaterMovie) {
    
            return next(new AppError('No watch-later movie exits with that imdbID', 400))
        }

    
    
        res.status(200).json(watchLaterMovie)

    }


    catch (error) {

        return next(new AppError(error.message, 404, error))

    }

}





/* 

Description:  Create Watch later Movie 

Method: POST

Route: /api/watch-later

Access: Private


*/

const createWatchLaterMovie = async (req, res, next) => {

    
    try {

        /* In the following, I am using spread operator to create  a object in the database with whatever there is in the 'req.body'. But actually, I can't simply put whatever I want in the req.body. Only some properties are accepted and they are defined in the mongoose schema. So, I need to make sure in the fronted that I only send those properties in the req.body.  */
        const watchLaterMovie = await WatchLaterModel.create({ ...req.body })

        res.status(200).json(watchLaterMovie)
    }


    catch (error) {

        return next(new AppError(error.message, 404, error))
 
     }

}





/* 

Description:  Delete a specific watch later movie 

Method: DELETE

Route: /api/watch-later/:id

Access: Private

*/


const deleteWatchLaterMovie = async (req, res, next) => {


    try {

        const { id } = req.params


        // trying to find the watch later movie and delete it
        const watchLaterMovie = await WatchLaterModel.findOneAndDelete({ imdbID: id })


        if (!watchLaterMovie) {

            return res.status(404).json({ "msg": "There is no watch later movie with that id." })
        }


        res.status(200).json(watchLaterMovie)

    }


    catch (error) {

        return next(new AppError(error.message, 404, error))
 
     }

}



module.exports = { fetchWatchLaterMovies, searchWatchLaterMovie, createWatchLaterMovie, deleteWatchLaterMovie }