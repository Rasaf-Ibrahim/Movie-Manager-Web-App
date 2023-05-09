// importing express
import express from 'express'

// importing from this project
import {
    create_a_already_watched_document,
    fetch_already_watched_documents_of_a_user,
    fetch_a_already_watched_document_of_a_user,
    delete_a_already_watched_document 
} from '../../controllers/movie/already-watched-controller.js'



//  already_watched_movie_routes
const already_watched_movie_routes = express.Router()


// create a already_watched document
already_watched_movie_routes.route('/create-one').post(create_a_already_watched_document)


// fetch already_watched documents of a user
already_watched_movie_routes.route('/fetch-all-of-a-user/:user_id').get(fetch_already_watched_documents_of_a_user)

// fetch one already_watched document of a user
already_watched_movie_routes.route('/fetch-one-of-a-user/:user_id/:imdb_id').get(fetch_a_already_watched_document_of_a_user)

// delete a already_watched document
already_watched_movie_routes.route('/delete-one/:user_id/:imdb_id').delete(delete_a_already_watched_document)


export default already_watched_movie_routes

