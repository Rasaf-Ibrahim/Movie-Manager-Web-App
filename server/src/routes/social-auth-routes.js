// importing packages
import express from 'express'
import passport from "passport"

// importing controllers
import { social_auth_response } from '../controllers/social-auth-controllers.js'


//  social_auth_routes
const social_auth_routes = express.Router()


social_auth_routes.route('/google').get(

    passport.authenticate("google",

        {
            scope: ["profile", "email"]
        }

    )
)


social_auth_routes.route('/google/redirect').get(

    passport.authenticate("google",

        {
            // success or failure, redirect to the same link
            successRedirect: `${process.env.FRONTEND_BASE_URL}/social-auth-response`,
            failureRedirect: `${process.env.FRONTEND_BASE_URL}/social-auth-response`,
        }

    )
)




social_auth_routes.route('/response').get(social_auth_response)


export default social_auth_routes
