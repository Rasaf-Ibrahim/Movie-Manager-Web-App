/*__________________________________________

 ✅ import
____________________________________________*/

// types
import { Request, Response, NextFunction } from 'express'


// utils
import clear_cookie from '../../utils/cookie/clear-cookie.js'
import success_response from '../../utils/success-response/success-response.js'


// error-handlers
import tryCatchAsync from '../../error-handlers/try-catch-async.js'



/*__________________________________________

 ✅ logout a user
____________________________________________*/


/*💡 Controller's Info 💡

    method: POST

    endpoint: '/api/v1/auth/sign-out'

    access: user (signed in)
*/

const sign_out_the_user = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Clear the 'access_token' cookie
    clear_cookie({
        res:res,
        cookie_name:'access_token'
    })

    // Clear the 'user_info' cookie
    clear_cookie({
        res:res,
        cookie_name:'user_info'
    })



    // Success response
    return success_response({
        res: res,
        message: 'Successfully logged out'
    })
})



export {
    sign_out_the_user
}