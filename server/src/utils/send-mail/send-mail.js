// import essential libraries
import nodemailer from "nodemailer"
import sendinblue_transport from 'nodemailer-sendinblue-transport'

// importing utils from this project
import generateToken from '../generate-token/generate-token.js'

// importing dotenv module to load environment variables from the .env file
import dotenv from 'dotenv'
dotenv.config()

const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL
const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY
const NAME_OF_THE_MAIL_SENDER = process.env.NAME_OF_THE_MAIL_SENDER
const EMAIL_OF_THE_MAIL_SENDER =  process.env.EMAIL_OF_THE_MAIL_SENDER




// 🍪 Create transporter object
const transporter = nodemailer.createTransport(
  new sendinblue_transport({
    apiKey: SENDINBLUE_API_KEY
  })
)


// 🍪 Create html template for confirm email 
const html_template_for_confirm_email = (url_with_token) => {
    
    return (

        `<div style="background-color: #f5f5f5; padding: 20px;">

            <div style="background-color: #fff; border-radius: 10px; padding: 20px;">
                <h2 style="text-align: center; color: #007bff;">Account Created!</h2>

                <p style="text-align: center; font-size: 16px;">Please click the button below to confirm your email address.</p>

                <div style="text-align: center; padding-top: 30px;">
                    <a style="background-color: #007bff; color: #fff; border-radius: 5px; padding: 10px 20px; text-decoration: none;" href="${url_with_token}">Verify Email</a>
                </div>

                <p style="text-align: center; font-size: 14px; padding-top: 20px;">This link is valid for the next 15 minutes only.</p>

            </div>

        </div>`

    )

}



// 🍪 Create html template for password reset 
const html_template_for_password_reset = (url_with_token) => {
    
    return (

        `<div style="background-color: #f5f5f5; padding: 20px;">

            <div style="background-color: #fff; border-radius: 10px; padding: 20px;">

                <h2 style="text-align: center; color: #007bff;">Reset Password</h2>

                <p style="text-align: center; font-size: 16px;">Your request to reset your password was submitted. If you did not make this request, simply ignore this email. If you did make this request just click the button below.</p>

                <div style="text-align: center; padding-top: 30px;">
                    <a style="background-color: #007bff; color: #fff; border-radius: 5px; padding: 10px 20px; text-decoration: none;" href="${url_with_token}">Reset Password</a>
                </div>

                <p style="text-align: center; font-size: 14px; padding-top: 20px;">This link is valid for the next 10 minutes only.</p>

            </div>

        </div>`

    )

}





// 🍪 function to send mail
const sendMail = async (id, email, option) => {


  // 🍔 if the 'option' argument is 'email verification'
  if (option === 'email verification') {

    // generate a JWT token for email verification
    const email_verification_token = generateToken(id, 'email')


    // construct the verification URL
    const url_with_token = `${FRONTEND_BASE_URL}/verify-email?token=${email_verification_token}`



    // set the email options
    const mailOptions = {
      from: `${NAME_OF_THE_MAIL_SENDER} < ${EMAIL_OF_THE_MAIL_SENDER} >`,
      to: email,
      subject: "Confirm your email for Rasaf's Web App",
      html: html_template_for_confirm_email(url_with_token) 
      
    }

    // send the email using the configured transporter object
    const mailSent = await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })

    // return a resolved promise with value 1 if the email was sent successfully
    if (mailSent) return Promise.resolve(1)
  }



  // 🍔 if the 'option' argument is 'forgot password'
  else if (option === 'forgot password') {

    // generate a JWT token for password reset
    const forgot_password_token = generateToken(id, 'forgot password')


    // construct the password reset URL 
    const url_with_token = `${FRONTEND_BASE_URL}/reset-password?token=${forgot_password_token}`



    // set the email options
    const mailOptions = {
      from: `${NAME_OF_THE_MAIL_SENDER} < ${EMAIL_OF_THE_MAIL_SENDER} >`,
      to: email,
      subject: "Rasaf's Web App - Password Reset Instructions",
      html: html_template_for_password_reset(url_with_token)
    }



    // send the email using the configured transporter object
    const mailSent = await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })

    // return a resolved promise with value 1
    if (mailSent) return Promise.resolve(1)
  }
}



export default sendMail