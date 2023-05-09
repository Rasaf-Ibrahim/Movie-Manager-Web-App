// importing axios
import axios from "axios"


// creating new axios instance
export const axios_manage_movie = axios.create({

    baseURL: `${import.meta.env.VITE_API_URL}/movie`,

    headers: {
        'Content-Type': 'application/json'
    }

})
