// importing libraries
import passport from 'passport'
import cookieSession from 'cookie-session'
import { Strategy as google_strategy } from 'passport-google-oauth20'



export default function social_auth_setup_func(app) {

    
    app.use(
        cookieSession({
            name: 'social_auth_session',
            keys: [process.env.COOKIE_SESSION_KEY],
            maxAge: 0.5 * 60 * 1000, // 30seconds is more than enough
            httpOnly: true
        })
    )

    app.use(passport.initialize());
    app.use(passport.session());



    passport.use(

        new google_strategy(

            // 1st argument - options object(client ID, client secret, callback URL, and required scope)
            {
                clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
                clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
                callbackURL: "/api/v1/auth/social/google/redirect"
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