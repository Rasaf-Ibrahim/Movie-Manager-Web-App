
/*__________________________________________

 ✅ import
____________________________________________*/

// libraries
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'


// types
import { Request, Response, NextFunction } from 'express'
import { type_of_request_with_user_id } from '../../types/type-of-request-with-user-id.js'


// model
import bookmark_model from '../../models/movie-manager/bookmark-movie-model.js'


// utils
import success_response from '../../utils/success-response/success-response.js'
import { success_response_for_fetch_all_request } from '../../utils/fetch-helpers/success-response-for-fetch-all-request.js'
import prepare_mongoose_query_params from '../../utils/fetch-helpers/prepare-mongoose-query-params/prepare-mongoose-query-params.js'


// error-handlers
import error_response from '../../error-handlers/error-response/error-response.js'
import tryCatchAsync from '../../error-handlers/try-catch-async.js'
import extra_layer_validation_for_request_body from '../../error-handlers/extra-layer-validation-for-request-body.js'



/*__________________________________________

 ✅ add_to_bookmark
____________________________________________*/



/*💡 Controller's Info 💡

    method: POST

    endpoint: '/api/v1/movie-manager/bookmark/add'

    access: sign_in_required, verified_email_required
*/


const add_to_bookmark = tryCatchAsync(async (req: type_of_request_with_user_id, res: Response, next: NextFunction) => {

    // Extract data from request 
    const {
        bookmark_type,
        content_type,
        content_id,
        title,
        year,
        poster_url
    } = req.body


    const user_id = req.user._id


    // Check if the document already exists
    const document_exists = await bookmark_model.findOne({
        user_id,
        content_type,
        content_id
    })


    let bookmarked_document


    // If the document exists
    if (document_exists) {

        // Check if the bookmark_type already exists for this document
        if (document_exists.bookmark_types.includes(bookmark_type)) {
            return error_response({
                next: next,
                status_code: StatusCodes.BAD_REQUEST,
                message: "Bookmark already exists for the content."
            })
        }

        // Add the new bookmark_type to the existing array
        bookmarked_document = await bookmark_model.findByIdAndUpdate(
            document_exists._id,

            { $push: { bookmark_types: bookmark_type } },

            { new: true }
        )
    }


    // If the document doesn't exist, create a new one
    else {
        bookmarked_document = await bookmark_model.create({
            user_id,
            bookmark_types: [bookmark_type],
            content_type,
            content_id,
            title,
            year,
            poster_url: poster_url.replace("/w780/", "/w342/")
        })
    }

    // Success response
    return success_response({
        res,
        message: `Added to ${req.body.bookmark_type} bookmark successfully`,

        info: {
            bookmarked_document
        }
    })

})




/*__________________________________________

 ✅ fetch_all_bookmarks_of_a_user
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/bookmark/fetch-all-of-a-user'

    access: sign_in_required, verified_email_required
*/

const fetch_all_bookmarks_of_a_user = tryCatchAsync(async (req: type_of_request_with_user_id, res: Response, next: NextFunction) => {


    // 🍪 get the user's id from the req.user
    const user_id = req.user._id


    // 🍪 queries 
    let {
        page, limit, skip, select, filter, sort
    } = prepare_mongoose_query_params({
        req_query: req.query,

        //we can't let a user to query another user's info
        // also, we will do manual query for bookmark_types
        do_not_query_these_fields: ['user_id', 'bookmark_type']
    })


    // filtering by user
    filter = { ...filter, user_id: user_id }


    if (req.query.bookmark_type) {
        filter = {
            ...filter,
            bookmark_types: { $in: [req.query.bookmark_type] }
        }
    }


    // 🍪 fetching documents 
    const fetched_documents = await bookmark_model
        .find(filter)
        .skip(skip)
        .limit(Number(limit))
        .select(select)
        .sort(sort)


    /* 🍪 success response 🍪*/
    return success_response_for_fetch_all_request({
        res: res,
        next: next,
        model: bookmark_model,
        limit: limit,
        skip: skip,
        page: page,
        filter: filter,
        fetched_documents: fetched_documents
    })
})



/*__________________________________________

 ✅ fetch_a_bookmark_of_a_user
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/bookmark/fetch-one-of-a-user/:content_type/:content_id'

    access: sign_in_required, verified_email_required
*/


const fetch_a_bookmark_of_a_user = tryCatchAsync(async (req: type_of_request_with_user_id, res: Response, next: NextFunction) => {


    // 🍪 provided id in the param
    const { content_type, content_id } = req.params


    // 🍪 get the user's id from the req.user
    const user_id = req.user._id



    // 🍪 check whether the document exists or not
    const fetched_document = await bookmark_model.findOne({
        user_id,
        content_type,
        content_id
    })


    if (!fetched_document) {

        return error_response({
            next: next,
            status_code: StatusCodes.NOT_FOUND,
            message: `Bookmark has not been found for the user with content type "${content_type}" and content ID "${content_id}".`
        })
    }


    // 🍪 success response 
    return success_response({
        res: res,
        message: 'Bookmark has been fetched',
        fetched_document: fetched_document
    })

})




/*__________________________________________

 ✅ remove_from_bookmark
____________________________________________*/


/*💡 Controller's Info 💡

    method: POST

    endpoint: '/api/v1/movie-manager/bookmark/remove-one-or-multiple'

    access: sign_in_required, verified_email_required
*/


const remove_from_bookmark = tryCatchAsync(async (req: type_of_request_with_user_id, res: Response, next: NextFunction) => {


    // Validate the request body 
    const validation_result = extra_layer_validation_for_request_body({
        req: req,
        next: next,
        fields_to_validate: [
            {
                name: 'content_ids',
                type: z.array(z.string()),
                custom_message:'The content_ids field is required and must be an array of strings.'
            },
            {
                name: 'content_type',
                type: z.string()
            },
            {
                name: 'bookmark_type',
                type: z.string()
            }
        ]
    })


    // If any error occurs during validation, return
    if (validation_result.any_error) return


    //  Extract Properties from request
    const { content_ids, content_type, bookmark_type } = req.body
    const user_id = req.user._id


    // Check whether the documents exist or not
    const fetched_documents = await bookmark_model.find({
         content_id: { $in: content_ids }, 
         content_type: content_type,
         bookmark_types: { $in: [bookmark_type] }
    })

    if (fetched_documents.length === 0) {
        return error_response({
            next: next,
            status_code: StatusCodes.NOT_FOUND,
            message: 'No documents exist with the provided ids'
        })
    }


    // Check whether the right user is trying to delete or not
    const unauthorized_bookmarks = fetched_documents.filter(doc => doc.user_id.toString() !== user_id.toString())

    if (unauthorized_bookmarks.length > 0) {
        return error_response({
            next: next,
            status_code: StatusCodes.UNAUTHORIZED,
            message: 'You are not authorized to delete some of the selected documents'
        })
    }


    // Creating 'bookmark_remove_operations', an array of promises
    const bookmark_remove_operations = fetched_documents.map(doc => {

        if (doc.bookmark_types.includes(bookmark_type)) {

            // Delete the document if it only has one bookmark_type and it's the one to be removed
            if (doc.bookmark_types.length === 1 && doc.bookmark_types[0] === bookmark_type) {

                return bookmark_model.deleteOne({ _id: doc._id })
            } 
            

            // Otherwise, use the $pull operator to remove the bookmark_type from the array
            else {

                return bookmark_model.findByIdAndUpdate(doc._id, { $pull: { bookmark_types: bookmark_type } })
            }
        }

        // return null for documents that don't require any operation
        return null  
    })


    // Filter out null from bookmark_remove_operations
    const valid_bookmark_remove_operations = bookmark_remove_operations.filter(op => op !== null)

    // Execute the operations
    await Promise.all(valid_bookmark_remove_operations)


    // Send Success Response
    return success_response({
        res: res,
        message: `${req.body.bookmark_type} bookmark has been successfully deleted.`

    })
})






export {
    add_to_bookmark,
    fetch_all_bookmarks_of_a_user,
    fetch_a_bookmark_of_a_user,
    remove_from_bookmark
}