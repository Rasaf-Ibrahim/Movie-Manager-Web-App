// importing libraries
import express from 'express'
import dotenv from 'dotenv'
import { StatusCodes } from 'http-status-codes'

// importing middlewares from this project
import cors_middleware from './src/middlewares/cors-middleware.js'
import morgan_logger_middleware from './src/middlewares/morgan-logger-middleware.js'
import helmet_middleware from './src/middlewares/helmet-middleware.js'
import file_upload_middleware from './src/middlewares/file-upload-middleware.js'
import global_error_handler_middleware from './src/middlewares/global-error-handler-middleware.js'

// importing utils from this project
import cloudinary_config from './src/utils/cloudinary-config.js'
import swagger_documentation from './src/utils/swagger-api-documentation.js'
import connect_db_and_start_server from './src/utils/connect-db-and-start-server.js'

// importing routes from this project
import global_routes from './src/routes/global-routes.js'
import social_auth_routes from './src/routes/social-auth-routes.js'
import email_auth_routes from './src/routes/email-auth-routes.js'
import favorite_movie_routes from './src/routes/movie/favorite-routes.js'
import yet_to_watch_movie_routes from './src/routes/movie/yet-to-watch-routes.js'
import already_watched_movie_routes from './src/routes/movie/already-watched-routes.js'

// importing services
import social_auth_setup_func from './src/services/social-auth-setup.js'



// dotenv
dotenv.config()

// express
const app = express()


//helmet (helmet library)
/* 💡 This middleware must be placed at the top so that everything has to go through this middleware which will make sure everything's safety. */
helmet_middleware(app)


// http logger (morgan library)
morgan_logger_middleware(app)


// CORS (cors library)
cors_middleware(app)


// parse incoming JSON data in the request body
app.use(express.json())


// file_upload_middleware (express-fileupload library)
file_upload_middleware(app)

// setup of social auth and related middlewares 
social_auth_setup_func(app)


// cloudinary config
cloudinary_config()



// routes
app.use('/', global_routes)
app.use('/api/v1/auth', email_auth_routes)
app.use('/api/v1/auth/social', social_auth_routes)
app.use('/api/v1/movie/favorite', favorite_movie_routes)
app.use('/api/v1/movie/yet-to-watch', yet_to_watch_movie_routes)
app.use('/api/v1/movie/already-watched', already_watched_movie_routes )

// swagger Documentation
swagger_documentation(app)



// route not found 
/* 💡 This route must be placed after all the routes */
app.all('*', (req, res, next) => {

    res.status(StatusCodes.NOT_FOUND).json({
        status: 'failed',
        message: `This '${req.originalUrl}' route doesn't exist on the server.`
    })

})



// global error handling middleware 
/* 💡 This middleware must be placed after all the middlewares */
app.use(global_error_handler_middleware)


// connect db and start server
connect_db_and_start_server(app)

