// importing mongoose
import mongoose from 'mongoose'


// connect db and start server
const connect_db_and_start_server = async (app) => {

    try {
        // connecting mongoDB
        await mongoose.connect(process.env.MONGODB_URI)

        /* after the mongoDB is connected, we want to start to listen for requests */
        app.listen(process.env.PORT || 4000, () => {

            console.log(`MongoDB is connected & server is listening on port: ${process.env.PORT || 4000}`)

        })


    }

    catch (error) {

        console.log(error)

        process.exit(1)
    }
}


export default connect_db_and_start_server
