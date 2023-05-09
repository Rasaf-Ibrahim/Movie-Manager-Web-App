import mongoose from 'mongoose'


const already_watched_schema = mongoose.Schema({


    user_id: {
        type: String,
        required: true
    },


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
const already_watched_model = mongoose.model('already_watched_model', already_watched_schema)


// sync indexes in mongoDB
already_watched_model.syncIndexes()
    .then(() => { /* Do nothing here */ })
    .catch((err) => { console.error('Error syncing indexes of already_watched_model', err) })


// exporting the model
export default already_watched_model


