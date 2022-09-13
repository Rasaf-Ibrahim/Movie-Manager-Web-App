const express = require('express')

const { fetchWatchLaterMovies, searchWatchLaterMovie, createWatchLaterMovie, deleteWatchLaterMovie } = require('../controllers/watchLaterController') 


const router = express.Router()


// Get all watch later movies
router.get('/', fetchWatchLaterMovies)


// Search a specific watch later movie
router.get('/:id', searchWatchLaterMovie)


// Post a new watch later movie
router.post('/', createWatchLaterMovie)


// Delete a specific watch later movie
router.delete('/:id', deleteWatchLaterMovie)



module.exports = router