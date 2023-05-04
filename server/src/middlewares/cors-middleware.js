// importing cors library
import cors from 'cors'

function cors_middleware(app) {

    app.use(
        cors({
            origin: [process.env.CORS_ORIGIN_URL],
            credentials: true
        })
    )
}


 
export default cors_middleware