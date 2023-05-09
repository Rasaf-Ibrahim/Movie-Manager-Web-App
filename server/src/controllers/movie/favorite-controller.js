// library
import { StatusCodes } from 'http-status-codes'

// model
import favorite_model from '../../models/movie/favorite-model.js'

// utils
import tryCatchAsync from '../../utils/error-handlers/try-catch-async.js'



/*-------------------------------------------------------------------
 ✅ create_a_favorite_document
----------------------------------------------------------------------*/


/* 

Method: POST

Route: /api/v1/movie/favorite/create-one

Access: Private


*/

const create_a_favorite_document = tryCatchAsync(async (req, res, next) => {


    // 🍪 extract properties from request body
    let { user_id, Title, Poster, Type, Year, imdbID } = req.body



    // 🍪 check if the user already has a favorite with the given IMDB ID
    const the_user_already_has_a_favorite_with_the_given_imdb_id = await favorite_model.findOne({
        user_id,
        imdbID
    })


    if (the_user_already_has_a_favorite_with_the_given_imdb_id) {

        return res.status(StatusCodes.CONFLICT).json({
            success: false,
            message: 'You have already added this to favorite list once.'
        })
    }


    // 🍪 create a new favorite document 
    let created_document = await favorite_model.create({
        user_id,
        Title,
        Poster, 
        Type, 
        Year, 
        imdbID
    })


    // 🍪 send a success response 
    return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'You have already added this to the favorite list once.',
        created_document
    })


})





/*-------------------------------------------------------------------
 ✅ fetch_favorite_documents_of_a_user
----------------------------------------------------------------------*/


/* 

Method: GET

Route: /api/v1/movie/favorite/fetch-all-of-a-user/:user_id

Access: Private

*/

const fetch_favorite_documents_of_a_user = tryCatchAsync(async (req, res, next) => {

    /* 🍪 req.params 🍪*/
    const { user_id } = req.params


    /* 🍪 fetching documents 🍪*/
    const favorite_documents_of_a_user = await favorite_model.find({user_id}).sort({ createdAt: -1 })


    /*🍪 success response 🍪*/
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Documents are successfully fetched.",
        fetched_documents: favorite_documents_of_a_user
    })

})




/* 

Method: GET

Route: /api/v1/movie/favorite/fetch-one-of-a-user/:user_id/:imdb_id

Access: Private

*/

const fetch_a_favorite_document_of_a_user = tryCatchAsync(async (req, res, next) => {


    // 🍪 req.params
    const { user_id, imdb_id } = req.params


    // 🍪 searching for the document
    const fetched_document = await favorite_model.findOne({
        user_id: user_id,
        imdbID: imdb_id
    })
    

    if (!fetched_document) {

        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: 'No document exists in the database with the provided user id and imdb id.'
        }) 
    }



    // 🍪 send a success response 
    return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'There is a document in the database with the provided user id and imdb id ',
        fetched_document
    })

})




/*-------------------------------------------------------------------
 ✅ delete_a_favorite_document
----------------------------------------------------------------------*/


/* 

Method: DELETE

Route: /api/v1/movie/favorite/delete-one/:user_id/:imdb_id

Access: Private

*/


const delete_a_favorite_document = tryCatchAsync(async (req, res, next) => {

        /* 🍪 req.params 🍪*/
        const { user_id, imdb_id } = req.params


        /* 🍪 trying to find the document  🍪*/
        const document = await favorite_model.findOne({
             user_id,
             imdbID: imdb_id
        })


        if (!document) {

            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: 'No document exists with the provided id.'
            }) 
        }


        const deleted_document = await favorite_model.findOneAndDelete({ user_id,
           imdbID: imdb_id
        })


        /*🍪 success response 🍪*/
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Document has successfully been deleted.",
            deleted_document
        })


})









export {
    create_a_favorite_document,
    fetch_favorite_documents_of_a_user,
    fetch_a_favorite_document_of_a_user,
    delete_a_favorite_document 
}