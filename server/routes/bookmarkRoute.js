import express from "express";

import { createBookmark, fetchBookmarks, fetchBookmark, deleteBookmark, updateBookmark } from "../controllers/bookmarkController.js";


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



export default router;