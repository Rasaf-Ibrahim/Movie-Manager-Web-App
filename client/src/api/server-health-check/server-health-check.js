import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


// creating new axios instance
export const axios_server_health_check = axios.create({

    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/wake-up-the-server-if-sleeping`,

    headers: {
        'Content-Type': 'application/json'
    }

})




export function useServerHealthCheck() {

    return useQuery({

        queryKey: ["server_health_check"],

        queryFn: async () => {

            const response = await axios_server_health_check.get(

                `/`,
            )

            return response.data
        },

        
        // fetch when component mounts (App.jsx component)
        enabled: true,


        /* 🔖
            if you keep refetching when the user uses the application, then the server will not go to sleep
            
            moreover, if we keep refetching after a very short time (30s), then we will not need to include this fetch query to every server related component, we will just include it in the App.jsx component, so at initial load this api will get activated and keep fetching after every 30 seconds
        */
        refetchInterval: 30000, // 30s in milliseconds


        // if we make the following option true, then even if server is down, it will keep trying, so the state will keep changing from error to loading, this will be a problem to show the right message to the user
        retry: false,


        // if a user is seeing the server is down message, if it wakes up within a minute, the user will know that
        retryDelay: 60000, // 1m in milliseconds


        cacheTime: 0,

    })

}


