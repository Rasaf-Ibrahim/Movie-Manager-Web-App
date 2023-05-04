// Importing morgan library
import morgan from 'morgan'

const morgan_logger_middleware = (app) => {

         // only  in the 'development' mode, we want to log 
        if (process.env.NODE_ENV === 'development') {

            app.use(morgan('tiny'))
        }
    
}


export default morgan_logger_middleware
