// importing libraries
import dotenv from 'dotenv'
import { StatusCodes } from 'http-status-codes'
import user_model from '../models/user-model.js'
import { nanoid } from 'nanoid'


// importing utils
import generate_token from '../utlis/generate-token/generate-token.js'
import tryCatchAsync from '../utlis/error-handlers/try-catch-async.js'


// dotenv
dotenv.config()




// the following controller will handle all possible response 
let social_auth_response = tryCatchAsync(async (req, res, next) => {

    if (!req.user) {

        res.status(StatusCodes.NOT_FOUND).json({
            status: "failed",
            message: "No user session found. You are not signed in. You need to sign in first to use this application."
        }) 
    }



    let user_document = await user_model.findOne({ email: req.user.emails[0].value})


   
    // if the user doesn't already exist in the database, we need to create the user and send success response with user info and token 
    if(!user_document) {

        // making sure the provider is google
        if(req.user.provider === 'google') {

            console.log(req.user.displayName)

            let created_document = await user_model.create({
                google_id: req.user.id,
                full_name: req.user.displayName,
                // making username unique and less than 20 characters
                username: `${req.user.name.givenName.substring(0, 10)}_${nanoid(8)}`,
                email: req.user.emails[0].value,
                picture_link: req.user.photos[0].value,
                auth_provider: req.user.provider
            })


            


            // destructuring some properties form the "created_document" object as we will send some specific info of the user as response
            let {_id, full_name, username, email, is_email_confirmed, picture_link, role} = created_document

            // We will also  send access and refresh token as response
            let access_token = generate_token(created_document._id, 'access')
            let refresh_token = generate_token(created_document._id, 'refresh')


            // send a success response with the user data and access, refresh tokens
            res.status(StatusCodes.CREATED).json({
                status: "success",
                message: 'User has been signed up successfully.',
                user_info: {_id, full_name, username, email, is_email_confirmed, picture_link, role},
                access_token,
                refresh_token
            })

        }

    }



    if(user_document && req.user.provider === 'google' && user_document.auth_provider !== 'google' ) {

        if(user_document.auth_provider === 'email') {

            res.status(StatusCodes.CONFLICT).json({
                status:'failed',
                message: "An account already exist with your Google account's email. The account was created by using an email and a password. You need to sign in with that email and the valid password."
            })
        
        }
    }


    if(user_document && req.user.provider === 'google' && user_document.auth_provider === 'google' ) {

        // destructuring some properties form the "created_document" object as we will send some specific info of the user as response
        let {_id, full_name, username, email, is_email_confirmed, picture_link, role} = user_document

        // We will also send access and refresh token as response
        let access_token = generate_token(user_document._id, 'access')
        let refresh_token = generate_token(user_document._id, 'refresh')


        // send a success response with the user data and access, refresh tokens
        res.status(StatusCodes.OK).json({
            status: 'success',
            message: 'User has been signed in successfully.',
            user_info: {_id, full_name, username, email, is_email_confirmed, picture_link, role},
            access_token,
            refresh_token
        })


    }



 })



  
    







export { 
    social_auth_response
}