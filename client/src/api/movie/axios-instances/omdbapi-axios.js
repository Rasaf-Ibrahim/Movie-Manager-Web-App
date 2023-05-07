import axios from 'axios';


// creating new axios instance
export const omdbapi_axios = axios.create({

    baseURL: "https://www.omdbapi.com",

    headers: {
        'Content-Type': 'application/json'
    }

})
