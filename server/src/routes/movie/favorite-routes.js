// importing express
import express from 'express'

// importing from this project
import {
    create_a_favorite_document,
    fetch_favorite_documents_of_a_user,
    fetch_a_favorite_document_of_a_user,
    delete_a_favorite_document 
} from '../../controllers/movie/favorite-controller.js'



//  favorite_movie_routes
const favorite_movie_routes = express.Router()


// create a favorite document
favorite_movie_routes.route('/create-one').post(create_a_favorite_document)


// fetch favorite documents of a user
favorite_movie_routes.route('/fetch-all-of-a-user/:user_id').get(fetch_favorite_documents_of_a_user)

// fetch one favorite document of a user
favorite_movie_routes.route('/fetch-one-of-a-user/:user_id/:imdb_id').get(fetch_a_favorite_document_of_a_user)

// delete a favorite document
favorite_movie_routes.route('/delete-one/:user_id/:imdb_id').delete(delete_a_favorite_document)


export default favorite_movie_routes

