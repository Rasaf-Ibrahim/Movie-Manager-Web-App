const FavoriteModel = require('../models/favoriteModel.js')

const AppError = require('../utlis/appError.js')
const tryCatchAsync = require('../utlis/tryCatchAsync.js')




/* 

Description:  Fetch all the  favorites 

Method: GET

Route: /api/watch-later

Access: Private

*/

const fetchFavorites = tryCatchAsync(async (req, res, next) => {

        const favorites = await FavoriteModel.find({}).sort({ createdAt: -1 })

        res.status(200).json(favorites)

        return next(new AppError(error.message, 404, error))

})





/* 

Description:  Search a specific favorite 

Method: GET

Route: /api/favorites/:id

Access: Private

*/


const searchFavorite = tryCatchAsync(async (req, res, next) => {



        const { id } = req.params

        // checking whether any favorite exits with that imdbID or not
        const favorite = await FavoriteModel.findOne({ imdbID: id })

        
        if (!favorite) {

        return next(new AppError('No favorite exits with that imdbID', 400))
            
        }


      res.status(200).json(favorite)
        
})





/* 

Description:  Create Favorite 

Method: POST

Route: /api/favorites

Access: Private


*/

const createFavorite = tryCatchAsync(async (req, res, next) => {


         /* In the following, I am using spread operator to create  a object in the database with whatever there is in the 'req.body'. But actually, I can't simply put whatever I want in the req.body. Only some properties are accepted and they are defined in the mongoose schema. So, I need to make sure in the fronted that I only send those properties in the req.body.  */

        const favorite = await FavoriteModel.create({ ...req.body })

        res.status(200).json(favorite)
    

})





/* 

Description:  Delete a specific favorite 

Method: DELETE

Route: /api/favorites/:id

Access: Private

*/


const deleteFavorite = tryCatchAsync(async (req, res, next) => {

    
        const { id } = req.params

        // trying to find the favorite 
        const existsOrNot = await FavoriteModel.findOne({ imdbID: id })


        if (!existsOrNot) {

            return next (new AppError('There is no favorite with that imdbID.', 400))
            
        }

        const favorite = await FavoriteModel.findOneAndDelete({ imdbID: id })


        res.status(200).json(favorite)
    

})





module.exports = { fetchFavorites, searchFavorite, createFavorite, deleteFavorite }