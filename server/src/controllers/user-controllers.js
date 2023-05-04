// library
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

// model
import user_model from '../models/user-model.js'
import refresh_token_model from '../models/refresh-token-model.js'

// utils
import generate_token from '../utlis/generate-token/generate-token.js'
import AppError from '../utlis/error-handlers/app-error.js'
import tryCatchAsync from '../utlis/error-handlers/try-catch-async.js'


/**
 * @openapi
 * tags:
 *   name: User
 *   description: API for managing user documents
 */



/*-------------------------------------------------------------------
 ✅ fetch_all_user_documents
----------------------------------------------------------------------*/



/**
 * @openapi
 * /api/v1/user:
 *   get:
 *     summary: Fetch all user documents for the current page
 *     tags: [User]
 *     parameters:
 *       - name: current_page
 *         in: query
 *         description: The page number to fetch (defaults to 1)
 *         schema:
 *           type: integer
 *       - name: documents_per_page
 *         in: query
 *         description: The number of documents to show per page (defaults to 20)
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successfully fetched the user documents
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Documents are successfully fetched.
 *                 fetched_documents:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 total_documents:
 *                   type: integer
 *                   example: 100
 *                 current_page:
 *                   type: integer
 *                   example: 2
 *                 total_pages:
 *                   type: integer
 *                   example: 5
 */



const fetch_all_user_documents = tryCatchAsync(async (req, res) => {


    /* 🍪 setting up how to query the documents while fetching 🍪*/

    // Get the current page number from the query string or default to 1
    const current_page = Number(req.query.current_page) || 1

    // Define the number of documents to show per page
    const documents_per_page = Number(req.query.documents_per_page) || 20


    /*🔖 the countDocuments method takes a filter object as an argument and returns the number of documents that match the filter in the collection. In this case, the filter object is empty, which means that it will count all the documents in the collection. */

    // Get the total number of documents in the user collection using the countDocuments method
    const total_documents = await user_model.countDocuments({});


    /* 🍪 fetching documents 🍪*/

    /*  
        - Find all users for the current page using the find method with an empty filter object
        - Limit the number of documents returned by the query using the limit method with the documents_per_page variable
        - Skip the documents that belong to previous pages using the skip method with a calculated value based on the current_page and documents_per_page variables
        - Sort the documents in descending order by their creation date using the sort method with a negative value for the createdAt field 
    */
    const fetched_all_user_documents = await user_model.find({})
        .limit(documents_per_page)
        .skip(documents_per_page * (current_page - 1))
        .sort('-createdAt');


    /*🍪 success response 🍪*/
    res.status(StatusCodes.OK).json({

        status: "Documents are successfully fetched.",

        // an array of user documents for the current page
        fetched_documents: fetched_all_user_documents,

        //  the total number of documents in the user collection
        total_documents: total_documents,

        // the current page number
        current_page: current_page,

        // the total number of pages calculated by dividing the total_documents by the documents_per_page and rounding up
        total_pages: Math.ceil(total_documents / documents_per_page),

    })
})





// @desc Delete a user
// @route DELETE /api/users/:id
// @access PRIVATE/ADMIN
const delete_a_user_document = tryCatchAsync(async (req, res) => {

    const user = await user_model.findById(req.params.id)

    if (!user) {
        return next(new AppError('No user exits with that id', StatusCodes.NOT_FOUND))
    }

    /* delete the document */
    await user.remove();


    /*  success response */
    res.status(StatusCodes.OK).json({

        status: "The user related is successfully deleted from the database.",
    })


})



// @desc get user by ID
// @route GET /api/users/:id
// @access PRIVATE/ADMIN
const getUserById = tryCatchAsync(async (req, res) => {
    const user = await user_model.findById(req.params.id).select('-password');
    if (user) res.json(user);
    else {
        res.status(404);
        throw new Error('user_model does not exist');
    }
});



// @desc update user from the admin panel
// @route PUT /api/users/:id
// @access PRIVATE/ADMIN
const updateUser = tryCatchAsync(async (req, res) => {
    // do not include the hashed password when fetching this user
    const user = await user_model.findById(req.params.id).select('-password');
    if (user) {

        // update whicever field was sent in the rquest body
        user.name = req.body.name || user.name;
        user.isConfirmed = req.body.email === user.email;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin;
        const updatedUser = await user.save();
        if (updatedUser) {
            res.json({
                id: updatedUser._id,
                email: updatedUser.email,
                name: updatedUser.name,
                isAdmin: updatedUser.isAdmin,
                isConfirmed: updatedUser.isConfirmed,
            });
        }
    } else {
        res.status(400);
        throw new Error('user_model not found.');
    }
});



// @desc get user data for google login in the frontend
// @route POST /api/users/passport/data
// @access PUBLIC
const getUserData = tryCatchAsync(async (req, res) => {
    const { id } = req.body;
    const user = await user_model.findById(id);
    if (user) {
        res.json({
            id: user._id,
            email: user.email,
            name: user.name,
            avatar: user.avatar,
            isAdmin: user.isAdmin,
            isConfirmed: user.isConfirmed,
        });
    } else {
        res.status(400);
        throw new Error('user_model not authorised to view this page');
    }
});


// @desc get data for an authenticated user
// @route GET /api/users/profile
// @access PRIVATE
const getUserProfile = tryCatchAsync(async (req, res) => {
    const user = await user_model.findById(req.user.id);
    if (user) {
        res.json({
            id: user._id,
            email: user.email,
            avatar: user.avatar,
            name: user.name,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('user_model not authorised to view this page');
    }
});

// @desc update data for an authenticated user
// @route PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = tryCatchAsync(async (req, res) => {
    const user = await user_model.findById(req.user.id);
    if (user) {
        // update whichever field is sent in the req body
        user.name = req.body.name || user.name;
        user.avatar = req.body.avatar || user.avatar;
        if (req.body.email) user.isConfirmed = req.body.email === user.email;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        // check if the current user logged in is with a social account, in which case do not create/find any access or refresh tokens
        const isSocialLogin =
            updatedUser.googleID ||
            updatedUser.linkedinID ||
            updateUser.githubID ||
            updatedUser.twitterID;

        let updatedUserObj = {
            id: updatedUser._id,
            email: updatedUser.email,
            name: updatedUser.name,
            avatar: updatedUser.avatar,
            isAdmin: updatedUser.isAdmin,
            isConfirmed: updatedUser.isConfirmed,
        };

        if (updatedUser) {
            if (!isSocialLogin) {
                const refreshToken = generate_token(updatedUser._id, 'refresh');
                const existingToken = await refresh_token_model.findOne({
                    email: updatedUser.email,
                });
                // store a new refresh token for this email
                if (existingToken) {
                    existingToken.token = refreshToken;
                    existingToken.save();
                } else {
                    refresh_token_model.create({
                        user: updatedUser._id,
                        token: refreshToken,
                    });
                }
                // add these two token to the response
                updatedUserObj = {
                    ...updatedUserObj,
                    accessToken: generate_token(updatedUser._id, 'access'),
                    refreshToken,
                };
            }
            res.json(updatedUserObj);
        }
    } else {
        res.status(400);
        throw new Error('user_model not found.');
    }
});


export {
    getUserProfile,
    getUserData,
    updateUserProfile,
    fetch_all_user_documents,
    delete_a_user_document,
    getUserById,
    updateUser,
};
