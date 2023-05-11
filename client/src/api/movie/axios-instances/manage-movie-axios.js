// importing axios
import axios from "axios"


// creating new axios instance
export const axios_manage_movie = axios.create({

    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/movie`,

    headers: {
        'Content-Type': 'application/json'
    }

})
