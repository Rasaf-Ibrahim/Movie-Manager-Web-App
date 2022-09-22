const mongoose = require('mongoose');

const watchLaterSchema = mongoose.Schema({

    Title: {
        type: String,
        required: true
    },

    Poster: {
        type: String,
        required: true
    },

    Type: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },

    imdbID: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true })


module.exports = mongoose.model('WatchLaterModel', watchLaterSchema)

