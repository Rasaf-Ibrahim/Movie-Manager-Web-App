const express = require('express')

const { createBookmark, fetchBookmarks, fetchBookmark, deleteBookmark, updateBookmark } = require('../controllers/bookmarkController.js') 



const router = express.Router()


// Get all bookmarks
router.get('/', fetchBookmarks)


// Get a specific bookmark
router.get('/:id', fetchBookmark)


// Post a new bookmark
router.post('/', createBookmark)


// Delete a specific bookmark
router.delete('/:id', deleteBookmark)


// Update a specific bookmark
router.patch('/:id', updateBookmark)



module.exports = router