// importing axios
import axios from "axios"


// creating new axios instance
export const authAxios = axios.create({
             
    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1`,

    headers: {
        'Content-Type': 'application/json'
    },

    withCredentials: true  // Enable sending cookies with requests

})



