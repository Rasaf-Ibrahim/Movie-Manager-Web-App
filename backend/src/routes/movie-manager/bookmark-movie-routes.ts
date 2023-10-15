/*__________________________________________

 ✅ All the Routes
____________________________________________*/

// express
import express from 'express'

//  controllers
import {
    add_to_bookmark,
    fetch_all_bookmarks_of_a_user,
    fetch_a_bookmark_of_a_user,
    remove_from_bookmark
} from '../../controllers/movie-manager/bookmark-movie-controllers.js'


// protection
import {
    sign_in_required,
    verified_email_required
} from '../../middlewares/route-protection-middlewares.js'




/*__________________________________________

 ✅ All the Routes
____________________________________________*/

// bookmark_movie_routes
const bookmark_movie_routes = express.Router()


bookmark_movie_routes
    .route('/add')
    .post(
        sign_in_required,
        verified_email_required,
        add_to_bookmark
    )


bookmark_movie_routes
    .route('/fetch-one-of-a-user/:content_type/:content_id')
    .get(
        sign_in_required,
        verified_email_required,
        fetch_a_bookmark_of_a_user
    )


bookmark_movie_routes
    .route('/fetch-all-of-a-user')
    .get(
        sign_in_required,
        verified_email_required,
        fetch_all_bookmarks_of_a_user
    )


bookmark_movie_routes
    .route('/remove-one-or-multiple')
    .post(
        sign_in_required,
        verified_email_required,
        remove_from_bookmark
    )



export default bookmark_movie_routes