const mongoose = require('mongoose');


const favoriteSchema = mongoose.Schema({


    /* Property names in the OMDB API was 'Title', 'Poster', 'Type', 'Year', 'imdbID'. I want to have the same property names here because If I have same property names, I can have one reusable movie-card component in the frontend(for movie searching section, favorite movie section and watch later section).*/

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
        required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('FavoriteModel', favoriteSchema)

