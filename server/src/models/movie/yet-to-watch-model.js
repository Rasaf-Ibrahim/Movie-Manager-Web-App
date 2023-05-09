import mongoose from 'mongoose'


const yet_to_watch_schema = mongoose.Schema({


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
const yet_to_watch_model = mongoose.model('yet_to_watch_model', yet_to_watch_schema)


// sync indexes in mongoDB
yet_to_watch_model.syncIndexes()
    .then(() => { /* Do nothing here */ })
    .catch((err) => { console.error('Error syncing indexes of yet_to_watch_model', err) })


// exporting the model
export default yet_to_watch_model


