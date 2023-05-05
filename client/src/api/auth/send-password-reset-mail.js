// importing  hook of react query
import { useMutation } from '@tanstack/react-query';


// importing axios instance
import { authAxios } from "./axios-instances/auth-axios";


// importing zustand store & immer
import { user_store } from '@/store/user-store';
import produce from 'immer'

// importing react-toastify
import { toast } from "react-toastify";



// creating custom hook for handling request
export function usePasswordResetMail() {

    return useMutation(

        (userData) => authAxios.post('/auth/send-password-reset-mail', userData),

        {
            onSuccess: (data) => {

                user_store.setState(produce((draft) => {

                    draft.password_reset = {

                        url_expiration_timestamp: Date.now() + 10 * 60 * 1000, //10 minutes

                        email: data.data.email
                    }
                }))

            },

            onError: (error) => {
                // show error toast
                const error_message = error.response.data.message

                toast.error(error_message)
            },
        }

    )
}

