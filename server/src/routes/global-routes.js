// importing express
import express from 'express'

// importing from this project
import {
    root_request,
    wake_up_the_server_if_sleeping
} from '../controllers/global-controllers.js'


//  router
const global_routes = express.Router()


/*-------------------------------------------------------------------
 ✅ All the Routes
----------------------------------------------------------------------*/

// request the the root url
global_routes.get('/', root_request)

// wake up the server if sleeping
global_routes.get('/wake-up-the-server-if-sleeping', wake_up_the_server_if_sleeping)


// exporting global_routes
export default global_routes