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
    
  

    // we need to check if five seconds or more have passed since user has signed in 
    const current_time_unix_timestamp = Date.now()
    const five_seconds_in_milliseconds = 5000
    const user_last_signed_in_unix_timestamp = user_info.last_signed_in_unix_timestamp

    const five_seconds_or_more_have_passed_since_user_has_signed_in = (current_time_unix_timestamp - five_seconds_in_milliseconds) >= user_last_signed_in_unix_timestamp



    // if logged in, redirect
    return (

        <>

            {/* only show the toast if the user is signed in for at least 5 seconds */}
            { five_seconds_or_more_have_passed_since_user_has_signed_in
               &&

               toast.info('You are already signed in.')
            }
             
            

            <Navigate to='/' />

        </>

    )

}

