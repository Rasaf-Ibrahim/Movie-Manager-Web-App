// importing libraries
import passport from 'passport'
import cookieSession from 'cookie-session'
import { Strategy as google_strategy } from 'passport-google-oauth20'



export default function social_auth_setup_func(app) {

    

    if(process.env.NODE_ENV === 'development') {

        app.use(
            cookieSession({
                name: 'social_auth_session',
                keys: [process.env.COOKIE_SESSION_KEY],
                maxAge: 1 * 60 * 1000, // 1 minute is more than enough
                httpOnly: true
            })
        )

    }

    else {

        app.use(
            cookieSession({
                name: 'social_auth_session',
                keys: [process.env.COOKIE_SESSION_KEY],
                maxAge: 1 * 60 * 1000, // 1 minute is more than enough
                httpOnly: true,
                domain: '.rasaf-ibrahim.com',
            })
        )

    }


    app.use(passport.initialize());
    app.use(passport.session());



    passport.use(

        new google_strategy(

            // 1st argument - options object(client ID, client secret, callback URL, and required scope)
            {
                clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
                clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
                callbackURL: `${process.env.GOOGLE_OAUTH_REDIRECT_URL}`
            },

            // 2nd argument - callback function which will be called when a user successfully authenticates with Google
            function (accessToken, refreshToken, profile, done) {
                done(null, profile)
            }


        )
    )




    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })


} 