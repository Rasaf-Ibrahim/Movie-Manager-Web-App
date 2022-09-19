const express = require('express')

const { fetchWatchLaterMovies, searchWatchLaterMovie, createWatchLaterMovie, deleteWatchLaterMovie } = require('../controllers/watchLaterController') 


const router = express.Router()


// Get all watch later movies
router.route('/').get(fetchWatchLaterMovies)

// Search a specific watch later movie
router.route('/:id').get(searchWatchLaterMovie)


// Post a new watch later movie
router.route('/').post(createWatchLaterMovie)


// Delete a specific watch later movie
router.route('/:id').delete(deleteWatchLaterMovie)


module.exports = router