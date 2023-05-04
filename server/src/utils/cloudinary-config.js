// importing package
import { v2 as cloudinary } from 'cloudinary'

function cloudinary_config() {

    const cloudinary_configuration = cloudinary.config({
        
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
     })


    return  cloudinary_configuration
} 


export default cloudinary_config