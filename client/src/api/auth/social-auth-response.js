import { useQuery } from '@tanstack/react-query';
import { authAxios } from "./axios-instances/auth-axios";


export function useSocialAuthResponse() {

  return useQuery({

    queryKey: ["auth_response"],

    queryFn: async () => {


       const response = await authAxios.get(

         '/auth/social/response',

         { withCredentials: true } 
         
        )

        return response.data
    },

    enabled: true,

    refetchOnWindowFocus: false,

    retry: false,

    

  })

}
