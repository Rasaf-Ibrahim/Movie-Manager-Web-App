import mongoose from "mongoose";

const bookmarkSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    movieID: {
        type: String,
        required: true
    }

}, { timestamps: true })


const exportingBookmarkModel = mongoose.model('BookmarkModel', bookmarkSchema)

export default exportingBookmarkModel


