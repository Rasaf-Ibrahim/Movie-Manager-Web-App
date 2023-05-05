// importing hook of react query
import { useMutation } from '@tanstack/react-query';

// importing axios instance
import { authAxios } from "./axios-instances/auth-axios";




// creating custom hook for handling request
export function useResetPassword() {

    return useMutation(

        (data) => authAxios.post('/auth/reset-password', data),

        {
            onSuccess: (data) => {

                // do nothing
                // we will show the error on the UI, so no need to display any toast

            },

            onError: (error) => {

                const error_message = error.response.data.message

                // do nothing
                // we will show the error on the UI, so no need to display any toast

            },
        }

    )
}

