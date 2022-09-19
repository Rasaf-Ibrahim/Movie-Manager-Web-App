const express = require('express')

const { fetchFavorites, searchFavorite, createFavorite, deleteFavorite } = require('../controllers/favoriteController.js') 


const router = express.Router()


// Get all favorites
router.route('/').get(fetchFavorites)


// Search a specific favorite
router.route('/:id').get(searchFavorite)


// Post a new favorite
router.route('/').post(createFavorite)


// Delete a specific favorite
router.route('/:id').delete(deleteFavorite)



module.exports = router