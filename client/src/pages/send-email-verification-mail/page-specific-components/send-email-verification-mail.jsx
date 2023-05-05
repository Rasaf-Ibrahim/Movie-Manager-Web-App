// hook
import { useState } from 'react';
import { useMount } from 'react-use';

// api hook
import { useSendEmailVerificationMail } from '@/api/auth/send-email-verification-mail';

// store
import { user_store } from '@/store/user-store';

// date-fns
import { format } from 'date-fns';

// styled-components
import { styled } from "@mui/material/styles";

// components
import { Box, Button, Container, Typography } from '@mui/material';


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function SEND_EMAIL_VERIFICATION_MAIL___COMPONENT() {

    // 🍪 get the state properties 
    const { user_info, email_verification } = user_store(state => ({
        user_info: state?.user_info,
        email_verification: state?.email_verification
    }))


    // 🍪 state to track whether the email is sent and url has not expired
    const [email_is_sent_and_url_has_not_expired, set_email_is_sent_and_url_has_not_expired] = useState(false)


    // 🍪 on  the initial load or page refresh, checking whether the email is sent and url has not expired
    useMount(() => {
        if (!email_verification?.url_expiration_timestamp) return

        if (email_verification && email_verification.url_expiration_timestamp > Date.now()) {
            set_email_is_sent_and_url_has_not_expired(true)
        }

    })



    // 🍪 hook related to API request
    const { mutate, status, data, error } = useSendEmailVerificationMail()


    // 🍪 function to send email
    const send_email = async () => {

        const formData = new FormData()

        formData.append('email', user_info.email)

        await mutate(formData)

    }





    /*-------------------------------------------------------------------
    ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <>

            {email_is_sent_and_url_has_not_expired || status === 'success' ?

                <EMAIL_IS_ALREADY_SENT___SECTION user_info={user_info} email_verification={email_verification} />

                :

                <SEND_EMAIL___SECTION user_info={user_info} status={status} send_email={send_email} />
            }

        </>

    )

}





/*-------------------------------------------------------------------
✅ Sections of <SEND_EMAIL_VERIFICATION_MAIL___COMPONENT/>
----------------------------------------------------------------------*/


// 🍪
const SEND_EMAIL___SECTION = ({ user_info, status, send_email }) => {


    return (

        <CONTAINER___STYLED>


            <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                Verify Your Email Address
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: '2rem', textAlign: 'justify', textAlignLast: 'center' }}>

                Your email address

                <Box component='span' sx={{ color: 'primary.main' }}> {user_info.email} </Box>

                is not verified. To activate your account, you must verify your email. Click the following button so that we can send you a verification email.

            </Typography>


            <Button onClick={send_email}
                variant="contained"
                color="primary"
                disabled={status === 'loading' || status === 'success'}>

                Send Verification Email
            </Button>


        </CONTAINER___STYLED>

    )



}



// 🍪
const EMAIL_IS_ALREADY_SENT___SECTION = ({ user_info, email_verification }) => {


    // create a new Date object from the timestamp
    let date = new Date(email_verification.url_expiration_timestamp)

    // Define a format string for the date and time
    let formatString = "'at' hh:mm a 'on' MMMM d, yyyy";

    // format the date and time using date-fns
    let time = format(date, formatString);



    return (
        <CONTAINER___STYLED>


            <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                Verification Email is Sent
            </Typography>


            <Typography variant="body1" sx={{ marginBottom: '2rem', textAlign: 'justify', textAlignLast: 'center' }}>

                Verification email has been sent to

                <Box component='span' sx={{ color: 'primary.main' }}> {user_info.email}. </Box>

                If you don't see any email on your inbox, please check the spam folder as well.
            </Typography>


            <Typography variant='body1'>

                There is a link in the email, you need to click on the link to verify the email. The link will expire

                <Box component='span' sx={{ color: 'primary.main' }}> {time} </Box>


            </Typography>




        </CONTAINER___STYLED>
    )
}






/*-------------------------------------------------------------------
✅ Styled Components for multiple sections
----------------------------------------------------------------------*/

const CONTAINER___STYLED = styled((props) =>

    <Container {...props} maxWidth="sm" />

)(({ theme }) => `

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center; 
    margin-top:2.5rem;

`)





