// importing express
import express from 'express'

// importing from this project
import {
    signup_user,
    send_email_verification_mail,
    verify_email,
    signin_user,
    send_password_reset_mail,
    reset_password
} from '../controllers/email-auth-controller.js'



//  cloudinary_image_routes
const email_auth_routes = express.Router()


// signup route
email_auth_routes.route('/signup').post(signup_user)


// send email verification mail route
email_auth_routes.route('/send-email-verification-mail').post(send_email_verification_mail)

// verify email route
email_auth_routes.route('/verify-email').patch(verify_email)

// signin user route
email_auth_routes.route('/signin').post(signin_user)


// send password reset mail 
email_auth_routes.route('/send-password-reset-mail').post(send_password_reset_mail)

// reset password
email_auth_routes.route('/reset-password').post(reset_password)



export default email_auth_routes