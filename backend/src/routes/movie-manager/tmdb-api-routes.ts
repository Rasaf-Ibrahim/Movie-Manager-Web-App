/*__________________________________________

 ✅ All the Routes
____________________________________________*/

// express
import express from 'express'

//  controllers
import {
    search_movie,
    search_series,
    trending_movies,
    trending_series,
    top_rated_movies,
    top_rated_series,
    movie_details,
    series_details,

} from '../../controllers/movie-manager/tmdb-api-controllers.js'


// protection
import {
    sign_in_required,
    verified_email_required
} from '../../middlewares/route-protection-middlewares.js'




/*__________________________________________

 ✅ All the Routes
____________________________________________*/

// tmdb_api_routes
const tmdb_api_routes = express.Router()


tmdb_api_routes
    .route('/search-movie')
    .get(
        sign_in_required,
        verified_email_required,
        search_movie
    )


tmdb_api_routes
    .route('/search-series')
    .get(
        sign_in_required,
        verified_email_required,
        search_series
    )


tmdb_api_routes
    .route('/trending-movies')
    .get(
        sign_in_required,
        verified_email_required,
        trending_movies
    )


tmdb_api_routes
    .route('/trending-series')
    .get(
        sign_in_required,
        verified_email_required,
        trending_series
    )


tmdb_api_routes
    .route('/top-rated-movies')
    .get(
        sign_in_required,
        verified_email_required,
        top_rated_movies
    )


tmdb_api_routes
    .route('/top-rated-series')
    .get(
        sign_in_required,
        verified_email_required,
        top_rated_series
    )


tmdb_api_routes
    .route('/movie-details')
    .get(
        sign_in_required,
        verified_email_required,
        movie_details
    )


tmdb_api_routes
    .route('/series-details')
    .get(
        sign_in_required,
        verified_email_required,
        series_details
    )


export default tmdb_api_routes