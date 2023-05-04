// importing libraries
import { StatusCodes } from 'http-status-codes'



/**
 * @openapi
 * tags:
 *   name: Global
 *   description: Global Endpoints
 */





/*-------------------------------------------------------------------
 ✅ root_request
----------------------------------------------------------------------*/


/**
 * @openapi
 * /:
 *   get:
 *     summary: Root URL Request. 
 *     tags:
 *       - Global
 *     responses:
 *       200:
 *         description: Successful response with URLs for UI and JSON documentation
 */




const root_request = (req, res) => {

    const domain = `${req.protocol}://${req.get('host')}`;

    const urls = {
        ui_documentation: `${domain}/docs-ui`,
        json_documentation: `${domain}/docs-json`
    }


    res.status(StatusCodes.OK).json({
        status: 'success',
        message: urls
    })

}




/*-------------------------------------------------------------------
 ✅ wake_up_the_server_if_sleeping
----------------------------------------------------------------------*/


/**
 * @openapi
 * /wake-up-the-server-if-sleeping:
 *   get:
 *     summary: Wake up the Server if it is sleeping. 
 *     description: Why do we need this API endpoint?  🧨 When we host the backend on free web services, they shut down the server after few minutes of inactivity. So, the frontend user's first request may take upto 30 seconds. To make the frontend's user experience a little better, we have thought about a solution. 🧨 According to the docs of render.com, web services on the free instance type are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, render.com spins it up again so that it can process the request. This can cause a response delay of up to 30 seconds for the first request that comes in after a period of inactivity. 🧨 Whenever a user will visit the frontend of the application, we will immediately send a request on the backend with this API so that the server awakes up in 30 seconds if it was sleeping.
 *     tags:
 *       - Global
 *     responses:
 *       200:
 *         description: Successful response with URLs for UI and JSON documentation
 */



const wake_up_the_server_if_sleeping = (req, res) => {

    res.status(StatusCodes.OK).json({
        status: 'success',
        message: 'Server is now up and running!'
    })
 }
  



export {
    root_request,
    wake_up_the_server_if_sleeping
}