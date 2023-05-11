import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


// creating new axios instance
export const axios_wake_up_the_server = axios.create({

    baseURL: import.meta.env.VITE_SERVER_BASE_URL,

    headers: {
        'Content-Type': 'application/json'
    }

})




export function useWakeUpTheServer(searched_word) {

    return useQuery({

        queryKey: ["wake_up_the_server"],

        queryFn: async () => {

            const response = await axios_wake_up_the_server.get(

                `/wake-up-the-server-if-sleeping`,
            )

            return response.data
        },

        enabled: false,

        // refetch in specific situation
        refetchOnWindowFocus: true,
        refetchOnMount: 'always',
        refetchOnReconnect: true,

        // always refetch after 10 minutes so that while a user is using the application, the server doesn't go to sleep
        refetchInterval: 600000, // 10m in milliseconds

        retry: true,

        cacheTime: 0,

    })

}
