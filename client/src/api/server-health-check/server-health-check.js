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

        
        enabled: true,

        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,

        refetchInterval: 30000, //30 seconds,

        refetchIntervalInBackground: true,

        retry: false,

        retryOnMount: false,

        //cacheTime
    })

}


