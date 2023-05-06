// store
import { user_store } from '@/store/user-store';

// router
import { Navigate } from 'react-router-dom'

// importing react-toastify
import { toast } from "react-toastify";



export default function NOT_LOGGED_IN({ children }) {


    // user_info
    const { user_info } = user_store(state => ({
        user_info: state?.user_info,
    }))


    //  if not logged in, can access the desired page
    if (!user_info) {
        return children
    }


    // if logged in, redirect
    return (

        <>

            {toast.info('You are already signed in.')}

            <Navigate to='/' />

        </>

    )


}

