import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// zustand store 
import { server_health_store } from '@/store/server-health-store';

// creating new axios instance
export const axios_server_health_check = axios.create({

    baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}/wake-up-the-server-if-sleeping`,

    headers: {
        'Content-Type': 'application/json'
    }

})




export function useServerHealthCheck() {


    // 🍪 get the state properties 
    const {
        server_is_sleeping,
        server_is_running,
        server_is_down
    } = server_health_store(state => ({

        server_is_sleeping: state?.server_is_sleeping,
        server_is_running: state?.server_is_running,
        server_is_down: state?.server_is_down,
    }))

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
            if we keep refetching while the server is running, then the then the server will not go to sleep and the user will not face sudden server sleep mode 
    
            moreover, if the server suddenly downs, that state can also be tracked
        */
        refetchInterval: () => {

            if(server_is_running) {

                // 30s
                return 30000
            }


            /* if the server was already sleeping or down and if we continuously send refetch, the state will keep changing from error to loading, this will be a problem to show the right message to the user */
            else if(server_is_down || server_is_sleeping) {

                return false
            }
        }, 


        /*  if we make the following option true, then even if server is down, it will keep trying, so the state will keep changing from error to loading, this will be a problem to show the right message to the user */
        retry: false,


        /* 🔖 if a user is seeing the server is down message, then if it wakes up within a minute, the user should know that, so we need to retry after a certain period */
        retryDelay: 60000, // 1m in milliseconds


        cacheTime: 0,

    })

}


