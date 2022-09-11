const express = require('express')

const { fetchFavorites, searchFavorite, createFavorite, deleteFavorite } = require('../controllers/favoriteController.js') 


const router = express.Router()


// Get all favorites
router.get('/', fetchFavorites)


// Search a specific favorite
router.get('/:id', searchFavorite)


// Post a new favorite
router.post('/', createFavorite)


// Delete a specific favorite
router.delete('/:id', deleteFavorite)



module.exports = router