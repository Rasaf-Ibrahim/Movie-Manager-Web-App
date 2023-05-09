// importing express
import express from 'express'

// importing from this project
import {
    create_a_yet_to_watch_document,
    fetch_yet_to_watch_documents_of_a_user,
    fetch_a_yet_to_watch_document_of_a_user,
    delete_a_yet_to_watch_document 
} from '../../controllers/movie/yet-to-watch-controller.js'



//  yet_to_watch_movie_routes
const yet_to_watch_movie_routes = express.Router()


// create a yet_to_watch document
yet_to_watch_movie_routes.route('/create-one').post(create_a_yet_to_watch_document)


// fetch yet_to_watch documents of a user
yet_to_watch_movie_routes.route('/fetch-all-of-a-user/:user_id').get(fetch_yet_to_watch_documents_of_a_user)

// fetch one yet_to_watch document of a user
yet_to_watch_movie_routes.route('/fetch-one-of-a-user/:user_id/:imdb_id').get(fetch_a_yet_to_watch_document_of_a_user)

// delete a yet_to_watch document
yet_to_watch_movie_routes.route('/delete-one/:user_id/:imdb_id').delete(delete_a_yet_to_watch_document)


export default yet_to_watch_movie_routes

