const FavoriteModel = require('../models/favoriteModel.js')




/* 

Description:  Fetch all the  favorites 

Method: GET

Route: /api/favorites

Access: Private

*/

const fetchFavorites = async (req, res) => {

    const favorites = await FavoriteModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(favorites)

}





/* 

Description:  Search a specific favorite 

Method: GET

Route: /api/favorites/:id

Access: Private

*/


const searchFavorite = async (req, res) => {

    const { id } = req.params


    // checking whether any favorite exits with that imdbID or not
    const favorite = await FavoriteModel.findOne({ imdbID: id })

    
    if (!favorite) {

        return res.status(400).json({ "msg": "No favorite exits with that imdbID" })
    }


    res.status(200).json(favorite)

}





/* 

Description:  Create Favorite 

Method: POST

Route: /api/favorites

Access: Private


*/

const createFavorite = async (req, res) => {

    const { imdbID } = req.body

    try {

        // trying to find if the movie already exits in the database or not
        const alreadyExists = await FavoriteModel.findOne({ imdbID: imdbID })

        if (alreadyExists) {
            return res.status(404).json({ "msg": "The movie already exits in the database." })
        }

        
        /* if the movie doesn't already exits in the database, we will add it to the database.
        
         In the following, I am using spread operator to create  a object in the database with whatever there is in the 'req.body'. But actually, I can't simply put whatever I want in the req.body. Only some properties are accepted and they are defined in the mongoose schema. So, I need to make sure in the fronted that I only send those properties in the req.body.  */
        const favorite = await FavoriteModel.create({ ...req.body })

        res.status(200).json(favorite)
    }

    catch (error) {
        res.status(400).json({ error: error.message })
    }

}





/* 

Description:  Delete a specific favorite 

Method: DELETE

Route: /api/favorites/:id

Access: Private

*/


const deleteFavorite = async (req, res) => {

    const { id } = req.params



    // trying to find the favorite and delete it
    const favorite = await FavoriteModel.findOneAndDelete({ imdbID: id })


    if (!favorite) {

        return res.status(404).json({ "msg": "There is no favorite with that id." })
    }


    res.status(200).json(favorite)

}






module.exports = { fetchFavorites, searchFavorite, createFavorite, deleteFavorite }