// library
import { StatusCodes } from 'http-status-codes'

// model
import already_watched_model from '../../models/movie/already-watched-model.js'

// utils
import tryCatchAsync from '../../utils/error-handlers/try-catch-async.js'



/*-------------------------------------------------------------------
 ✅ create_a_already_watched_document
----------------------------------------------------------------------*/


/* 

Method: POST

Route: /api/v1/movie/already_watched/create-one

Access: Private


*/

const create_a_already_watched_document = tryCatchAsync(async (req, res, next) => {


    // 🍪 extract properties from request body
    let { user_id, Title, Poster, Type, Year, imdbID } = req.body



    // 🍪 check if the user already has a already_watched with the given IMDB ID
    const the_user_already_has_a_already_watched_with_the_given_imdb_id = await already_watched_model.findOne({
        user_id,
        imdbID
    })


    if (the_user_already_has_a_already_watched_with_the_given_imdb_id) {

        return res.status(StatusCodes.CONFLICT).json({
            success: false,
            message: 'You have already added this to already_watched list once.'
        })
    }


    // 🍪 create a new already_watched document 
    let created_document = await already_watched_model.create({
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
        message: 'You have already added this to the already_watched list once.',
        created_document
    })


})





/*-------------------------------------------------------------------
 ✅ fetch_already_watched_documents_of_a_user
----------------------------------------------------------------------*/


/* 

Method: GET

Route: /api/v1/movie/already_watched/fetch-all-of-a-user/:user_id

Access: Private

*/

const fetch_already_watched_documents_of_a_user = tryCatchAsync(async (req, res, next) => {

    /* 🍪 req.params 🍪*/
    const { user_id } = req.params


    /* 🍪 fetching documents 🍪*/
    const already_watched_documents_of_a_user = await already_watched_model.find({user_id}).sort({ createdAt: -1 })


    /*🍪 success response 🍪*/
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Documents are successfully fetched.",
        fetched_documents: already_watched_documents_of_a_user
    })

})




/* 

Method: GET

Route: /api/v1/movie/already_watched/fetch-one-of-a-user/:user_id/:imdb_id

Access: Private

*/

const fetch_a_already_watched_document_of_a_user = tryCatchAsync(async (req, res, next) => {


    // 🍪 req.params
    const { user_id, imdb_id } = req.params


    // 🍪 searching for the document
    const fetched_document = await already_watched_model.findOne({
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
 ✅ delete_a_already_watched_document
----------------------------------------------------------------------*/


/* 

Method: DELETE

Route: /api/v1/movie/already_watched/delete-one/:user_id/:imdb_id

Access: Private

*/


const delete_a_already_watched_document = tryCatchAsync(async (req, res, next) => {

        /* 🍪 req.params 🍪*/
        const { user_id, imdb_id } = req.params


        /* 🍪 trying to find the document  🍪*/
        const document = await already_watched_model.findOne({
             user_id,
             imdbID: imdb_id
        })


        if (!document) {

            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: 'No document exists with the provided id.'
            }) 
        }


        const deleted_document = await already_watched_model.findOneAndDelete({ user_id,
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
    create_a_already_watched_document,
    fetch_already_watched_documents_of_a_user,
    fetch_a_already_watched_document_of_a_user,
    delete_a_already_watched_document 
}