// Importing express-fileupload library 
import fileUpload from 'express-fileupload'


function file_upload_middleware(app) {

    app.use(
        fileUpload({ useTempFiles: true })
    )
}


export default file_upload_middleware

