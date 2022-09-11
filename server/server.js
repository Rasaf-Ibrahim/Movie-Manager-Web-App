
// importing necessary stuffs
const express = require('express')

const mongoose = require('mongoose');

require('dotenv').config()

const cors = require('cors')


const favoriteRoute = require('./routes/favoriteRoute.js')


// express
const app = express()


// CORS (Cross-origin resource sharing allows AJAX requests to skip the Same-origin policy and access resources from remote hosts)
app.use(cors())


// middleware
app.use(express.json())


// routes
app.use('/api/Favorites', favoriteRoute)



// connecting mongoDB and starting to listen for requests
const connectDB = async() => {

    try{
        // connecting mongoDB
        await mongoose.connect(process.env.MONGO_URI)

        /* after the mongoDB is connected, we want to start to listen for requests */
        app.listen(process.env.PORT || 4000 , ()=> {

            console.log(`MongoDB is connected & Listening on port: ${process.env.PORT}`)

        })
    }

    catch (error){

        console.log(error)

        process.exit(1)  
    }
}


connectDB()


