import axios from 'axios';


// creating new axios instance
export const axios_omdb_api = axios.create({

    baseURL: "https://www.omdbapi.com",

    headers: {
        'Content-Type': 'application/json'
    }

})
