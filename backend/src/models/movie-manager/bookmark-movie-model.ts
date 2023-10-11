/*__________________________________________

 ✅ import
____________________________________________*/

// libraries
import mongoose from 'mongoose'


/*__________________________________________

 ✅ schema
____________________________________________*/

const bookmark_schema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true
    },

    bookmark_types: {
        type: [String],
        enum: ['favorite', 'watchlist', 'watched'],
        required: true
    },

    content_type: {
        type: String,
        enum: ['movie', 'series'],
        required: true
    },

    content_id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    poster_url: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true,
    }

}, { timestamps: true })





// creating the model
const bookmark_model = mongoose.model('bookmark_model', bookmark_schema)


// sync indexes in mongoDB
bookmark_model.syncIndexes()
    .then(() => { /* Do nothing here */ })
    .catch((err) => { console.error('Error syncing indexes of bookmark_model', err) })


// exporting the model
export default bookmark_model

