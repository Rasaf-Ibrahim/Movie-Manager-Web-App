import mongoose from 'mongoose'


const favorite_schema = mongoose.Schema({


    user_id: {
        type: String,
        required: true
    },

    /* Property names in the OMDB API was 'Title', 'Poster', 'Type', 'Year', 'imdbID'. To stay consistent and to able to use same movie card component in the frontend for both OMDB fetched movie and favorite movie, we should use the same property names here. */

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
    }

}, { timestamps: true })



// creating the model
const favorite_model = mongoose.model('favorite_model', favorite_schema)


// sync indexes in mongoDB
favorite_model.syncIndexes()
    .then(() => { /* Do nothing here */ })
    .catch((err) => { console.error('Error syncing indexes of favorite_model', err) })


// exporting the model
export default favorite_model


