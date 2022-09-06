import BookmarkModel from '../models/BookmarkModel.js';

import mongoose from 'mongoose';




/* 

Description:  Fetch all the  bookmarks 

Method: GET

Route: /api/bookmarks

Access: Private

*/

const fetchBookmarks = async (req, res) => {

    const bookmarks = await BookmarkModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(bookmarks)

}





/* 

Description:  Fetch a specific bookmark 

Method: GET

Route: /api/bookmarks/:id

Access: Private

*/


const fetchBookmark = async (req, res) => {

    const { id } = req.params


    // mongodb id has its own format, checking if it's a valid mongodb id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    // trying to find bookmark with the id
    const bookmark = await BookmarkModel.findOne({ _id: id })


    // checking if any bookmark exits with that  valid mongodb id 
    if (!bookmark) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    res.status(200).json(bookmark)

}





/* 

Description:  Create Bookmark 

Method: POST

Route: /api/bookmarks

Access: Private

*/

const createBookmark = async (req, res) => {

    const { title, imageUrl, year, movieID } = req.body

    try {
        const bookmark = await BookmarkModel.create({ title, imageUrl, year, movieID })

        res.status(200).json(bookmark)
    }

    catch (error) {
        res.status(400).json({ error: error.message })
    }

}







/* 

Description:  Delete a specific bookmark 

Method: DELETE

Route: /api/bookmarks/:id

Access: Private

*/


const deleteBookmark = async (req, res) => {

    const { id } = req.params


    // mongodb id has its own format, checking if it's a valid mongodb id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    // trying to find the bookmark and delete it
    const bookmark = await BookmarkModel.findOneAndDelete({ _id: id })


    // checking if any bookmark exits or not with that valid mongodb id 
    if (!bookmark) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    res.status(200).json(bookmark)

}





/* 

Description:  Update a specific bookmark 

Method: DELETE

Route: /api/bookmarks/:id

Access: Private

*/


const updateBookmark = async (req, res) => {

    const { id } = req.params


    // mongodb id has its own format, checking if it's a valid mongodb id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    // trying to find the bookmark and update it
    const bookmark = await BookmarkModel.findOneAndUpdate({ _id: id }, { ...req.body })


    // checking if any bookmark exits or not with that valid mongodb id 
    if (!bookmark) {

        return res.status(404).json({ "msg": "There is no bookmark with that id." })
    }


    res.status(200).json(bookmark)

}



export { fetchBookmark, fetchBookmarks, createBookmark, deleteBookmark, updateBookmark }