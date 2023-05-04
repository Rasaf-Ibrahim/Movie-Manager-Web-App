// importing helmet library
import helmet from "helmet"


function helmet_middleware (app) {

    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                mediaSrc: ["'self'", 'data:']
            }
        })
    )
    
}  


export default helmet_middleware

